const fs = require('node:fs');

console.log('inicio de readFile');
fs.readFile('./test.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log('Este archivo no se ha podido leer');
        return;
    }
    console.log(data);
})
console.log('fin de readFile');


/*
Function statement
function (error, data) {
    console.log(error);
    console.log(data);
}

Arrow function  - funciones anonimas
(error, data) => {
    console.log(error);
    console.log(data);
}

const myFunction = function () {}
const myFunction = () => {}

myFunction();
*/