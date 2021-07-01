import fs from "fs";

export function generateDirectories(appName: string) {
    fs.mkdirSync(appName);
    fs.mkdirSync(`${appName}/controllers`);
    fs.mkdirSync(`${appName}/routes`);
    fs.mkdirSync(`${appName}/repository`);
    fs.mkdirSync(`${appName}/models`);
}