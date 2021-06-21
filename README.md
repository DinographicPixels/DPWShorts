# ![DPWShorts](https://cdn.glitch.com/0a51cb1c-8d1f-48f8-a7f4-23770c5b0ca2%2FDPShorts%20Logo.png)
### Pre-Alpha Documentation
**Features :**
* Error/Warning/Info Console Logging (with colors!)
* TempDB (a temporary database)
* *New features coming soon..*

Installation
-
* NPM :`npm install dpwshorts`
* Yarn : `yarn add dpwshorts`

Get started
-
---
```
const DPWShorts = require("dpwshorts")

const DPWS = new DPWShorts()
```
Err,Warn,Info Console usage
-
```
DPWS.Console(Type, Desc, NoDescWarn) 
// Example : DPWS.Console("ERR", "Couldn't execute test()")
// For Type you can use ERR, WARN or INFO

// There's a warning if you don't set the Desc property but you can ignore it by turning on the NoDescWarn property.
// Example : DPWS.Console("ERR", "", true) <- it will ignore the warning
// Example : DPWS.Console("ERR", "", true) <- it will show the warning
```

TempDB usage (a simple, easy to use & fast to setup temporary database)
-
##### Usage :
```
DPWS.TempDBAddValue(Name, Value, DebugMode) // Add/Create a new value
DPWS.TempDBGetValue(ValueName) // Get the created value
TempDBModifyValue(ValueName, NewValue) // Modify the created value (you can't modify the name of the value)
TempDBRemoveValue(ValueName) // Remove the created value.
```
```
DPWS.TempDBAddValue("Level", "85") // Create/Add a new value to the database

DPWS.TempDBGetValue("Level") // Get the value of "Level"

// Log the value with DPWShorts Console :
DPWS.Console("INFO",`You are level ${DPWS.TempDBGetValue("Level")}!`)

// Log the value with DPWShorts Console : 
console.log(`You are level ${DPWS.TempDBGetValue("Level")}!`)

// Modify a value :
DPWS.TempDBModifyValue("Level", "86")

DPWS.Console("INFO",`You are now level ${DPWS.TempDBGetValue("Level")}!`) // Log the new value

// Delete a value
DPWS.TempDBRemoveValue("Level")

DPWS.TempDBGetValue("Level") // Check if the value is deleted
// It will return an error if the value is deleted.
```

##### You can also enable the debug mode when you create your value with TempDBAddValue() by changing the DebugMode property to true.

---
#### Patch Note (v1.0.16)
- DPWS.TempDBGetValue() "undefined" value issue fixed.
---

### [Need some help or you found a bug?](https://github.com/DinographicPixels/DPWShorts/issues)
