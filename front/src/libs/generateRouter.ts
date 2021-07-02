import fs from "fs";
import {settings} from "../settings";

export function generateRouter(appName: string, appNameSerialize: string) {
    let controller = fs.readFileSync(`${settings.template}/controller.txt`, 'utf8');
    let routerInitial = fs.readFileSync(`${settings.template}/initial/router.json`, 'utf8');
    const routeSettingApp = `${settings.settings.app}/${appNameSerialize}`

    fs.mkdir(routeSettingApp, () => {
        fs.writeFile(`${routeSettingApp}/router.json`, routerInitial, () => console.log("GENERATE ROUTE"));
    });

    const template = fs.readFileSync(`${settings.template}/initial/initialRouter.txt`, 'utf-8');

    const custom = template
        .replace("{name}", "CustomRouter")
        .replace("{children}", "")
        .replace("{imports}", "");

    const routeInitialRS = JSON.parse(routerInitial).map(item => {
        return `\tr.${item.method}("${item.route}", controllers.${item.routeName}())`;
    }).join("\n");

    const generated = template
        .replace("{name}", "GeneratedRouter")
        .replace("{children}", routeInitialRS)
        .replace("{imports}", `\t"${appNameSerialize}/controllers"`)

    fs.writeFile(`${appName}/routes/generatedRouter.go`, generated, () => console.log("GENERATE ROUTE"));
    fs.writeFile(`${appName}/routes/customRouter.go`, custom, () => console.log("GENERATE ROUTE"));


    JSON.parse(routerInitial).forEach(item => {
        let data = controller;
        data = data.replace("{name}", item.routeName);
        fs.writeFile(`${appName}/controllers/${item.routeName}.go`, data, () => {

        });
    })
}