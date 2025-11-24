/* OS module in node.js

node.js comes with a build-in module called os that provides information about your computer`s opearating system.

you dont need to install anything - just import it : 
ex : import os from "os"\
*/


import os from "os"

// to identify os
console.log(os.platform());

console.log(os.arch());


console.log(os.cpus());


console.log(os.totalmem());


console.log(os.hostname());


console.log(os.type());


console.log(os.version());


console.log(os.uptime());