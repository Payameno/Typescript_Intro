function stringFunction() {
  console.log("Hello I'm a string ")
}

function cal(val1: number, val2: number): number{
  let total: number = val1 + val2;
  return total;
}

//equalling a function as a variable, we should define type returns
let universal: (value1: number, value2: number)=>number;
universal = cal;
console.log("total", universal(1,2));