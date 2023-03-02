import chalk from "chalk";

enum ErrorLevel {
    Info = 0,
    Warning = 1,
    Fatal = 2
}

class LoggerHandler {

    private _exit_on_fatal: boolean;

    constructor(exit_on_fatal: boolean = true) {
        this._exit_on_fatal = exit_on_fatal;
    }

    public log(errorLevel: ErrorLevel, message: string) {
        if (errorLevel === ErrorLevel.Info) {
            console.log(chalk.blue("[*] " +message));
        } else if (errorLevel === ErrorLevel.Warning) {
            console.log(chalk.yellow("[!] " +message));
        } else if (errorLevel === ErrorLevel.Fatal) {
            console.log(chalk.red("[X] " +message));
            if (this._exit_on_fatal) process.exit(1);
        }
        
    }
}

export default LoggerHandler;