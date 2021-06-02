module.exports = class DPWShorts {

DPWConsole(WarningType, objectName) {
    if (WarningType == "ERR"){
        console.log(`DPW: Error, object: ${objectName}`)
    }else if (WarningType == "WARN"){
        console.log(`DPW: Warning, object: ${objectName}`)
    }else if (WarningType == "INFO"){
        console.log(`DPW: Info, ${objectName}`)
    }
}

}

