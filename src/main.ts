import { config } from "dotenv";
import chalk from "chalk";
import LoggerHandler from "./LoggerHandler.js";
import ParseEnviroment from "./EnviromentSetup.js";


const logger = new LoggerHandler();

let args = ParseEnviroment(logger);