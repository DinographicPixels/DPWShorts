module.exports = class DPWS {

    Console(Type, Desc) {
        if (Type == "ERR" || Type == "WARN" || Type == "INFO"){
            console.log(`DPW ${Type}: ${Desc}`)
        }else{
            console.log("DPW: Couldn't load DPWConsole()")
            console.log("DPW: Invalid Type, try again with ERR or WARN or INFO")
        }
    }
    
    }
    