import fs from 'fs';
import {settings} from "../../../src/settings";
import {generateMain} from "../../../src/libs/generateMain";
import {generateDirectories} from "../../../src/libs/generateDirectories";
import {generateRouter} from "../../../src/libs/generateRouter";

const {exec, execSync} = require("child_process");

export default function handler(req, res) {
    const {
        name
    } = req.query;
    const appNameSerialize = name.replaceAll(' ', '-');
    const appName = `${settings.API}/${appNameSerialize}`;

    if (fs.existsSync(appName)) {
        return res.status(404).json({});
    }

    generateDirectories(appName);
    generateMain(appName, appNameSerialize);
    generateRouter(appName, appNameSerialize);

    exec(`cd ${appName} &&  go mod init ${appNameSerialize} && go mod tidy`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        execSync(`cd ${appName} &&  go get github.com/gin-gonic/gin`);
        console.log(`stdout: ${stdout}`);
    });
    res.status(200).json({name, method: req.method})
}