import { config } from "dotenv";
import LoggerHandler from "./LoggerHandler";



function ParseEnviroment(logger: LoggerHandler) {
    config();
    //check if token is provided
    if (!process.env.TOKEN) {
        logger.logError(2, "No token provided");
        process.exit(1);
    }
    if (!process.env.PREFIX) {
        logger.logError(2, "No prefix provided");
        process.exit(1);
    }

    const VERBOSE = process.env.VERBOSE === "true" ? true : false;

    let result = {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        verbose: VERBOSE
    }
    logger.logError(0, "Enviroment variables parsed");
    return result;

}

export default ParseEnviroment;