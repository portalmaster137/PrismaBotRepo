import chalk from "chalk";

enum ErrorLevel {
    Info = 0,
    Warning = 1,
    Fatal = 2
}

class LoggerHandler {

    public logError(errorLevel: ErrorLevel, message: string) {
        if (errorLevel === ErrorLevel.Info) {
            console.log(chalk.blue("[*] " +message));
        } else if (errorLevel === ErrorLevel.Warning) {
            console.log(chalk.yellow("[!] " +message));
        } else if (errorLevel === ErrorLevel.Fatal) {
            console.log(chalk.red("[X] " +message));
        }
        
    }
}

export default LoggerHandler;