var automobile = {
    brand: "BME",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an hour");
    }
};
function car2(_automobile) {
    _automobile.speed = 300;
    console.log("this " + _automobile.brand + " is going at " + _automobile.speed + " miles an hour");
}
car2(automobile);
//impelement to classes
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log("Hi my cars is going at " + speed);
    };
    return AutoMobileClass;
}());
var carObject = new AutoMobileClass();
carObject.speedMethod(1000);
