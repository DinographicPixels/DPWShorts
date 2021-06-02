function DPWConsole(Type, Desc) {
    if (WarningType == "ERR" || WarningType == "WARN" || WarningType == "INFO"){
        console.log(`DPW ${WarningType}: ${Desc}`)
    }else{
        console.log("DPW: Couldn't load DPWConsole()")
        console.log("DPW: Invalid WarningType, try again with ERR or WARN or INFO")
    }
}

module.exports = DPWConsole