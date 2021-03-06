const fs = require('fs');

class Logger{
    constructor(logOutput = "BOTH"){
        this._logOutput = logOutput;
    }

    setLoggerType = function(logOutput){
        switch(logOutput){
            case "CONSOLE":
            case "FILE":
            case "BOTH":{
                this._logOutput = logOutput;
                break;
            }
            default:
                break;
        }
    }    

    log = function(message){

        switch(this._logOutput){
            case "CONSOLE":{
                console.log(message);
            }
            case "FILE":{
                fs.appendFileSync('log.txt', `\n${message}`, 'utf8');

            }
            case "BOTH":{
                console.log(message);
                fs.appendFileSync('log.txt', `\n${message}`, 'utf8');
                break;
            }
            default:
                break;
        }
    }
}

const logger = new Logger(true);

module.exports = {logger};
