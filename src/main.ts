import { PrismaClient } from "@prisma/client";

import LoggerHandler from "./LoggerHandler.js";
import ParseEnviroment from "./EnviromentSetup.js";


const logger = new LoggerHandler(true);

let args = ParseEnviroment(logger);