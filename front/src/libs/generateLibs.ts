import fs from "fs";
import {settings} from "../settings";

export const generateLibs = (appName: string, appNameSerialize: string) => {
    fs.mkdirSync(`${settings.API}/${appNameSerialize}/libs`);
    fs.writeFileSync(`${settings.API}/${appNameSerialize}/libs/db.go`,
        fs.readFileSync(`${settings.template}/initial/db.txt`, 'utf-8'),
    );
    fs.writeFileSync(`${settings.API}/${appNameSerialize}/libs/env.go`,
        fs.readFileSync(`${settings.template}/initial/fncEnv.txt`, 'utf-8'),
    );
}