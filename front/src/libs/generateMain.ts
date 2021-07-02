import fs from "fs";
import {settings} from "../settings";

export function generateMain(appName: string, appNameSerialize: string) {
    let generateTemplate = fs.readFileSync(`${settings.template}/initial/main.txt`, 'utf8')
    let envInitial = fs.readFileSync(`${settings.template}/initial/env.txt`, 'utf8')
    let librariesInitial = fs.readFileSync(`${settings.template}/initial/libraries.txt`, 'utf8')

    generateTemplate = generateTemplate.replace('{generate}', "");

    generateTemplate = generateTemplate.replace(
        "{libraries}",
        `"${appNameSerialize}/routes"\n\t"${appNameSerialize}/libs"\n${librariesInitial}`
    )

    fs.writeFileSync(`${appName}/main.go`, generateTemplate);
    fs.writeFileSync(`${appName}/.env`, envInitial);
}