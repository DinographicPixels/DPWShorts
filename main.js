var colors = require('colors')

module.exports = class DPWS {

    Console(Type, Desc, NoDescWarn) {
        if(NoDescWarn !== true){
            if (Desc == undefined || Desc == "" || Desc == null){ console.log(`DPWShorts WARN: There's no description set.`.underline.bgYellow.black) }}
        
        if (NoDescWarn !== true && NoDescWarn !== false){
            if (NoDescWarn !== undefined){
                console.log(`DPWShorts ERROR: NoDescWarn has an invalid value: ${NoDescWarn}.`.underline.bgRed.white)
                console.log(`DPWShorts INFO: NoDescWarn working values : true, false`.underline.grey)
            }
        }
        if (Type == "ERR" || Type == "WARN" || Type == "INFO"){
            if (Type == "ERR"){
            console.log(`DPW ${Type}:`.underline.red, `${Desc}`.red)
            }else if(Type == "WARN"){
            console.log(`DPW ${Type}:`.underline.yellow, `${Desc}`.yellow)
            }else if(Type == "INFO"){
            console.log(`DPW ${Type}:`.underline.grey, `${Desc}`.grey)
            }
        }else{
            console.log("DPWShorts ERROR: Couldn't load DPWConsole()".underline.bgRed.white)
            console.log("DPWShorts ERROR: Invalid Type, try again with ERR or WARN or INFO".underline.bgRed.white)
        }
    }
    
    }
    