import "reflect-metadata";
import * as yargs from "yargs";
import { GenerateContextCommand } from "commands/generate.context.command";

yargs
    .usage("Usage: $0 <command> [options]")
    .command(new GenerateContextCommand())
    .recommendCommands()
    .demandCommand(1)
    .help("h")
    .alias("h", "help")
    .argv;

require("yargonaut")
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");