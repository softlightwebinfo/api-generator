import fs from 'fs';
import {settings} from "../../../src/settings";

const {exec, execSync} = require("child_process");

export default function handler(req, res) {
    const {
        name,
        routeName,
        route,
        method,
        type,
    } = req.query;

    const appNameSerialize = name.replaceAll(' ', '-');
    const appName = `${settings.API}/${appNameSerialize}`;

    if (!fs.existsSync(appName)) {
        return res.status(404).json({});
    }

    let routerApp = fs.readFileSync(`${settings.settings.app}/${appNameSerialize}/router.json`, 'utf8')
    let jsonRoute = JSON.parse(routerApp);
    jsonRoute.push({routeName, route, method, type});

    fs.writeFileSync(`${settings.settings.app}/${appNameSerialize}/router.json`, JSON.stringify(jsonRoute));

    res.status(200).json({name, method: req.method})
}