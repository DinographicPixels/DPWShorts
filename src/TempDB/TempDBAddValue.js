var colors = require('colors')

var Console = require('../console')

    function TempDBAddValue(Name, Value, TDBStored, DebugMode){
        if (Name !== undefined, Value !== undefined){
        TDBStored[Name] = Value
        Console("INFO", `Stored a new value.`)
        if (DebugMode == true, DebugMode !== undefined){
            console.log("DPW TempDB DEBUG:".cyan, `New stored value : Name: ${Name}, Value: ${Value}`)
            console.log("DPW TempDB DEBUG:".cyan, "Stored values in TempDB :", TDBStored)
        }
    }else if (Name == undefined && Value == undefined){
        console.log(`DPWShorts ERROR: Cannot add a new value. [TempDBAddValue(${Name}, ${Value})]`.underline.bgRed.white)
        console.log(`DPWShorts ERROR: TempDBAddValue(Name and Value property are undefined--> ${Name}, ${Value})`.underline.bgRed.white)
        console.log("DPWShorts ERROR: Please complete all properties.".underline.bgRed.white)   
    }else if (Name == undefined){
        console.log(`DPWShorts ERROR: Cannot add a new value. [TempDBAddValue(${Name}, ${Value})]`.underline.bgRed.white)
        console.log(`DPWShorts ERROR: TempDBAddValue(Name property is undefined--> ${Name})`.underline.bgRed.white)
        console.log("DPWShorts ERROR: Please complete all properties.".underline.bgRed.white)   
    }else if (Value == undefined){
        console.log(`DPWShorts ERROR: Cannot add a new value. [TempDBAddValue(${Name}, ${Value})]`.underline.bgRed.white)
        console.log(`DPWShorts ERROR: TempDBAddValue(Value property is undefined--> ${Value})`.underline.bgRed.white)
        console.log("DPWShorts ERROR: Please complete all properties.".underline.bgRed.white) 
    }else{
        console.log(`DPWShorts ERROR: Cannot add a new value. [TempDBAddValue(${Name}, ${Value})]`.underline.bgRed.white)
        console.log("DPWShorts ERROR: Please complete all properties. If this message appear it may be a problem of the DPWShorts package. Report the bug : https://github.com/DinographicPixels/DPWShorts/issues".underline.bgRed.white) 
    }
}


module.exports = TempDBAddValue