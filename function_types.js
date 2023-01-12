function stringFunction() {
    console.log("Hello I'm a string ");
}
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(2, 2);
var universal = stringFunction;
universal();
