var colors = require('colors')

var Console = require('../console')
const fetch = require("./node-fetch");

    function Updater(package){
        const UpdateNotify = 'https://raw.githubusercontent.com/DinographicPixels/DPWShorts/main/src/Updater/UpdateMessage.txt'
        const LatestVersion ='https://raw.githubusercontent.com/DinographicPixels/DPWShorts/main/src/Updater/ActualVersion.txt'
        
        var LatestVerText = "not defined"
        
        if (package.version){
        fetch(LatestVersion)
        .then( r => r.text() )
        .then( t => LatestVerText = t ).then(function(){
            if (LatestVerText !== package.version){
                fetch(UpdateNotify)
                .then( r => r.text() )
                .then( t => console.log(`${t}`.cyan) )
        }
        });
        }
}


module.exports = Updater