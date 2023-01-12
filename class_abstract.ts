abstract class People {
  displayData(){
    console.log("Some Data");
  }
}

//cannot creaet an instant of an abstract class
let peopleClass = new People;
peopleClass.displayData();

//  YOu can create an extension
class Kids extends People{

}
//with extension an instant is possible
let kidClass = new Kids;
kidClass.displayData();