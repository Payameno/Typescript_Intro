//Generic type will let it be as whateverinput is
function displayData<TYPE>(someData: TYPE) {
  let someVariable: TYPE;
  return someData;
}
function displayData2(someData: number) {
  return someData;
}
console.log(displayData(1222));