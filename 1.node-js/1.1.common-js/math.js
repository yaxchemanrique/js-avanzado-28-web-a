//! CommonJS

// console.log('math.js - inicio', exports);
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

//Si nos creamos nuestro propio objeto
/* const math = {};

math.suma = add;
math.resta = subtract;
math.mult = mult; */

//Para exportar algo diferente a un objeto:
/* objetoA =  {
    add: add,
    subtract: subtract,
    mult: mult, 
}; */

module.exports =  {
    add,
    subtract,
    mult,
};

/* 
Si agregamos nuevas propiedades a el objeto "pre-hecho" *exports* por JS
exports.suma = add;
exports.resta = subtract;
exports.mult = mult;
console.log('math.js - final', exports); */