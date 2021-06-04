var colors = require('colors')

var Console = require('../console')

    function TempDBModifyValue(ValueName, NewValue, TDBStored){
        if (TDBStored[ValueName] !== undefined && NewValue !== undefined){
        TDBStored[ValueName] = NewValue
        Console("INFO", `Modified ${ValueName} value.`)
        }else if (TDBStored[ValueName] == undefined){
            Console("ERR", "The value you wanted to modify doesn't exist.")
        }else if (NewValue == undefined){
            Console("ERR", "The NewValue property is undefined/empty.")
        }else{
            Console("ERR", "Oops, i think you broke the module :/")
            Console("ERR", "Report the bug right here : https://github.com/DinographicPixels/DPWShorts/issues")
        }
}


module.exports = TempDBModifyValue