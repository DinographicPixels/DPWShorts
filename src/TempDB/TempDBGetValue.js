var colors = require('colors')

var Console = require('../console')

    function TempDBGetValue(ValueName, TDBStored){
        if (ValueName !== undefined && TDBStored[ValueName] !== undefined){ return TDBStored[ValueName]; }else if (ValueName == undefined){console("ERR", "Invalid ValueName.", true)}else{
            Console("ERR", "Incorrect ValueName/Couldn't return your value.", true)
            Console("ERR", "Check if you created a value with that name.", true)
            Console("ERR", "If you created a value with that name, then it could be a bug. Report it : https://github.com/DinographicPixels/DPWShorts/issues", true)
        }
}


module.exports = TempDBGetValue