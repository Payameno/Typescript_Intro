var myNameSapce;
(function (myNameSapce) {
    myNameSapce.name1 = "Isabelle";
    function displayData1() {
        return name;
    }
    myNameSapce.displayData1 = displayData1;
})(myNameSapce || (myNameSapce = {}));
///<reference path="modul1.ts" />
console.log(myNameSapce.name1);
//Generating ts file:
//tsc importNameSpace --outFile importNamespace.js
