import yargs from "yargs";
import { isDirectory, getAbsolutePath, getFiles } from "utils/directory";
import chalk from "chalk";

export class GenerateContextCommand implements yargs.CommandModule {

    private readonly TS_TOKEN = "ts";

    builder(args: yargs.Argv) {
        return args
            .option("inputDir", {
                alias: "inputDir",
                default: "./models",
                describe: "Models location directory path"
            })
            .option("outputDir", {
                alias: "outputDir",
                default: "./context",
                describe: "Context output directory path"
            });
    }

    async handler(args: yargs.Arguments) {

        const directoryRelativePath = args.directory as string;

        const outputDirectoryRelativePath = args.outputDir as string;

        const path = getAbsolutePath(directoryRelativePath);

        if(!isDirectory(path)) 
            console.log(chalk.red("Provided path is not a directory"));
            
        //const typescriptFiles = getFiles(path).filter(f => f.extention === this.TS_TOKEN);

        const files = await import(path);

        console.log(files);
    }

}