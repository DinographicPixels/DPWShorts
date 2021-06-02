var colors = require('colors')

module.exports = class DPWS {

    Console(Type, Desc, NoDescWarn) {
        if(NoDescWarn == false || NoDescWarn == undefined || NoDescWarn == ""){
            if (Desc == undefined || Desc == "" || Desc == null){ console.log(`DPWShorts WARN: There's no description set.`.underline.bgYellow.black) }}
        if (Type == "ERR" || Type == "WARN" || Type == "INFO"){
            if (Type == "ERR"){
            console.log(`DPW ${Type}:`.underline.red, `${Desc}`.red)
            }else if(Type == "WARN"){
            console.log(`DPW ${Type}:`.underline.yellow, `${Desc}`.yellow)
            }else if(Type == "INFO"){
            console.log(`DPW ${Type}:`.underline.grey, `${Desc}`.grey)
            }
        }else{
            console.log("DPWShorts: Couldn't load DPWConsole()".underline.bgRed.white)
            console.log("DPWShorts: Invalid Type, try again with ERR or WARN or INFO".underline.bgRed.white)
        }
    }
    
    }
    