import fs from 'fs';
import {settings} from "../../../src/settings";

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

    let generateTemplate = fs.readFileSync(`${settings.template}/initial/main.txt`, 'utf8')
    let routerInitial = fs.readFileSync(`${settings.template}/initial/router.json`, 'utf8')
    let controller = fs.readFileSync(`${settings.template}/controller.txt`, 'utf8')

    fs.mkdirSync(appName);
    fs.mkdirSync(`${appName}/controllers`);
    fs.mkdirSync(`${appName}/routes`);
    fs.mkdirSync(`${appName}/repository`);

    const routeInitialRS = JSON.parse(routerInitial).map(item => {
        return `\tr.${item.method}("${item.route}", controllers.${item.routeName}())`;
    }).join("\n");

    generateTemplate = generateTemplate.replace('{generate}', routeInitialRS);

    if (routerInitial) {
        generateTemplate = generateTemplate.replace("{libraries}", `"${appNameSerialize}/controllers"`)
    }

    fs.writeFileSync(`${appName}/main.go`, generateTemplate);

    JSON.parse(routerInitial).forEach(item => {
        let data = controller;
        data = data.replace("{name}", item.routeName);

        fs.writeFile(`${appName}/controllers/${item.routeName}.go`, data, () => {

        });
    })

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