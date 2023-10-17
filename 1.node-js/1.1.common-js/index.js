// const math = require('./math.js');
/*
console.log(math);

console.log(math.suma(1,5));
console.log(math.resta(1,5));
console.log(math.mult(1,5));  */


//!Usando destructuring / destructuración

const {add, subtract, mult} = require('./math.js');
// const suma = math.add;
// const resta = math.subtract;
// const mult = math.mult;
// console.log(suma, resta, mult);
console.log(add, subtract, mult);
console.log(add(4,6));
console.log(subtract(4,6));
console.log(mult(4,6));
