function cal(val1: number, val2: number): number{
  let total = val1 + val2;
  return total;
}
//or:(return type can be stated inside the function)
function cal1(val1: number, val2: number){
  let total: number = val1 + val2;
  return total;
}

cal(2,2);
cal1(3,4);