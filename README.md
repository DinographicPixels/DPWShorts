# DPWShorts
### Pre-Alpha Documentation
**Features :**
* Error/Warning/Info Console Logging (with colors!)
* *New features coming soon..*

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
