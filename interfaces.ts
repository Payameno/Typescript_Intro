interface IAutomobile{
  //question mark makes the variable optional
  brand?: string;
  speed?: number;
  speedMethod?(velocity: number): void;
}

interface IAutomobile2 extends IAutomobile{
  brand: string;
};

const automobile: IAutomobile = {
  brand: "BME",
  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  }
}

const automobile2: IAutomobile2 = {

  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  }
}

function car2(_automobile: IAutomobile) {
  _automobile.speed = 300;
  console.log(`this ${_automobile.brand} is going at ${_automobile.speed} miles an hour`)
}

car2(automobile);

//impelement to classes

class AutoMobileClass implements IAutomobile {
  brand: string;
  speed: number;

  speedMethod(speed) {
    console.log(`Hi my cars is going at ${speed}`);
  }
}

let carObject = new AutoMobileClass();
carObject.speedMethod(1000);