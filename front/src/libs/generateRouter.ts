import fs from "fs";
import {settings} from "../settings";

export function generateRouter(appName: string, appNameSerialize: string) {
    let controller = fs.readFileSync(`${settings.template}/controller.txt`, 'utf8');
    let routerInitial = fs.readFileSync(`${settings.template}/initial/router.json`, 'utf8');
    const routeSettingApp = `${settings.settings.app}/${appNameSerialize}`

    fs.mkdir(routeSettingApp, () => {
        fs.writeFile(`${routeSettingApp}/router.json`, routerInitial, () => console.log("GENERATE ROUTE"));
    });

    JSON.parse(routerInitial).forEach(item => {
        let data = controller;
        data = data.replace("{name}", item.routeName);

        fs.writeFile(`${appName}/controllers/${item.routeName}.go`, data, () => {

        });
    })
}