var colors = require('colors')

var console = require('./src/console')

var config = require('./config.json') // Importing config
var package = require('./package.json') // Importing package.json

var Updater = require('./src/Updater/updater')

// TempDB
var TempDBAddValueI = require('./src/TempDB/TempDBAddValue')
// var TempDBGetValueI = require('./src/TempDB/TempDBGetValue') Get Value doesn't work (external file issue)
var TempDBModifyValueI = require('./src/TempDB/TempDBModifyValue')
var TempDBRemoveValueI = require('./src/TempDB/TempDBRemoveValue')

var TDBStored = {}

// Check for update
Updater(package)

module.exports = class DPWS {

    Console(Type, Desc, NoDescWarn) {
        console(Type, Desc, NoDescWarn)
    }
    
    TempDBAddValue(Name, Value, DebugMode){
        TempDBAddValueI(Name, Value, TDBStored, DebugMode)
    }

    TempDBGetValue(ValueName){
        // Code from (./src/TempDB/TempDBGetValue)
        // Script here due to external file issue (can't get values)
        if (ValueName !== undefined && TDBStored[ValueName] !== undefined){ return TDBStored[ValueName]; }else if (ValueName == undefined){console("ERR", "Invalid ValueName.", true)}else{
            Console("ERR", "Incorrect ValueName/Couldn't return your value.", true)
            Console("ERR", "Check if you created a value with that name.", true)
            Console("ERR", "If you created a value with that name, then it could be a bug. Report it : https://github.com/DinographicPixels/DPWShorts/issues", true)
        }
    }

    TempDBModifyValue(ValueName, NewValue){
        TempDBModifyValueI(ValueName, NewValue, TDBStored)
    }

    TempDBRemoveValue(ValueName){
        TempDBRemoveValueI(ValueName, TDBStored)
    }
    
    }
    