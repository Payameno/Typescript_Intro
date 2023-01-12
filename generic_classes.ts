class ObjectGenericClass<TYPE1, TYPE2 extends string>{

  constructor(public value1: TYPE1, public value2: TYPE2){

  }

}

let object1 = new ObjectGenericClass(22, "Hello");
let object2 = new ObjectGenericClass<boolean, string>(false, "yes");