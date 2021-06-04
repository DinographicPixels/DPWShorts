var colors = require('colors')

var Console = require('../console')

    function TempDBRemoveValue(ValueName, TDBStored){
        if (TDBStored[ValueName] !== undefined){
        delete TDBStored[ValueName]
        Console("INFO", `Deleted ${ValueName} value.`)
        }else{
        Console("ERR", `Couldn't delete the specified value. The value you specified is probably incorrect.`) 
        }
}


module.exports = TempDBRemoveValue