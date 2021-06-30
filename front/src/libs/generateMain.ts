import fs from "fs";
import {settings} from "../settings";

export function generateMain(appName: string, appNameSerialize: string) {
    let generateTemplate = fs.readFileSync(`${settings.template}/initial/main.txt`, 'utf8')
    let routerInitial = fs.readFileSync(`${settings.template}/initial/router.json`, 'utf8')

    const routeInitialRS = JSON.parse(routerInitial).map(item => {
        return `\tr.${item.method}("${item.route}", controllers.${item.routeName}())`;
    }).join("\n");

    generateTemplate = generateTemplate.replace('{generate}', routeInitialRS);

    if (routerInitial) {
        generateTemplate = generateTemplate.replace("{libraries}", `"${appNameSerialize}/controllers"`)
    }

    fs.writeFileSync(`${appName}/main.go`, generateTemplate);
}