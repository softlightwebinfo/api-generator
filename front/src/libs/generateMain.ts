import fs from "fs";
import {settings} from "../settings";

export function generateMain(appName: string, appNameSerialize: string) {
    let generateTemplate = fs.readFileSync(`${settings.template}/initial/main.txt`, 'utf8')
    let routerInitial = fs.readFileSync(`${settings.template}/initial/router.json`, 'utf8')
    let envInitial = fs.readFileSync(`${settings.template}/initial/env.txt`, 'utf8')
    let librariesInitial = fs.readFileSync(`${settings.template}/initial/libraries.txt`, 'utf8')

    const routeInitialRS = JSON.parse(routerInitial).map(item => {
        return `\tr.${item.method}("${item.route}", controllers.${item.routeName}())`;
    }).join("\n");

    generateTemplate = generateTemplate.replace('{generate}', routeInitialRS);

    if (routerInitial) {
        generateTemplate = generateTemplate.replace(
            "{libraries}",
            `"${appNameSerialize}/controllers"\n\t"${appNameSerialize}/libs"\n${librariesInitial}`
        )
    }

    fs.writeFileSync(`${appName}/main.go`, generateTemplate);
    fs.writeFileSync(`${appName}/.env`, envInitial);
}