import fs from "fs";
import pathUtils from "path";

export function validatePath(path: string) {
    return fs.existsSync(path);
}

export function isDirectory(path: string) {
    const exists = validatePath(path);

    if(exists)
        return fs.lstatSync(path).isDirectory();
}

export function getAbsolutePath(relativePath: string) {
    return pathUtils.resolve(relativePath);
}

export function getFiles(directoryPath: string) {
    const files = fs.readdirSync(directoryPath);

    return files.map(fileName => ({
        fileName,
        extention: pathUtils.extname(`${directoryPath}/${fileName}`)
    }));
}

