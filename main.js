var colors = require('colors')

var console = require('./src/console')

// TempDB
var TempDBAddValueI = require('./src/TempDB/TempDBAddValue')
var TempDBGetValueI = require('./src/TempDB/TempDBGetValue')
var TempDBModifyValueI = require('./src/TempDB/TempDBModifyValue')
var TempDBRemoveValueI = require('./src/TempDB/TempDBRemoveValue')

var TDBStored = {}

module.exports = class DPWS {

    Console(Type, Desc, NoDescWarn) {
        console(Type, Desc, NoDescWarn)
    }
    
    TempDBAddValue(Name, Value, DebugMode){
        TempDBAddValueI(Name, Value, TDBStored, DebugMode)
    }

    TempDBGetValue(ValueName){
        TempDBGetValueI(ValueName, TDBStored)
    }

    TempDBModifyValue(ValueName, NewValue){
        TempDBModifyValueI(ValueName, NewValue, TDBStored)
    }

    TempDBRemoveValue(ValueName){
        TempDBRemoveValueI(ValueName, TDBStored)
    }
    
    }
    