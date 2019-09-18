class log {
    constructor(){

    }
    logTime(){
        const time=new Date();
        // return time.toLocaleDateString();
        return time
    }
    info(action,message){
        console.log(`action ==>${action}  log info ==>${message}  time:${this.logTime()}`)
    }
    warn(message){
        console.warn(`log warn ==>${message}   time:${this.logTime()}`)
    }
    error(message){
        console.error(`log error ==>${message}   time:${this.logTime()}`)
    }
    trance(){
        console.trace();
    }
    debug(){
        debugger;
    }
}
console.log('run log')
let Log = new log();
export default Log

