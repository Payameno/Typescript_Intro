//two ways to import content from another ts file

import object = require("./module_external");
//make sure objects are exported in the module_external

//2: import * as object from "./module_external";

//3 import { name1, displayData1, } from "./module_external";

console.log(object.displayData1);
console.log(object.name1);