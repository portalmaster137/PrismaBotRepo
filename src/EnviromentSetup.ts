import { config } from "dotenv";
import LoggerHandler from "./LoggerHandler";



function ParseEnviroment(logger: LoggerHandler) {
    config();
    //check if token is provided
    if (!process.env.TOKEN) {
        logger.log(2, "No token provided");
    }
    if (!process.env.PREFIX) {
        logger.log(2, "No prefix provided");
    }
    if (!process.env.clientID) {
        logger.log(2, "No clientID provided");
    }

    const VERBOSE = process.env.VERBOSE === "true" ? true : false;

    let result = {
        token: process.env.TOKEN as string,
        prefix: process.env.PREFIX as string,
        verbose: VERBOSE,
        clientID: process.env.clientID as string
    }
    logger.log(0, "Enviroment variables parsed");
    return result;

}

export default ParseEnviroment;