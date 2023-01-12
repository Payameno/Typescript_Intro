///<reference path="modul1.ts" />

// this is how you use an alias for an imported nameSpace
import nameSpaceFunction = myNameSapce.displayData1;

console.log(myNameSapce.name1);
console.log(nameSpaceFunction("Maria"));

//Generating ts file:
//tsc importNameSpace --outFile importNamespace.js