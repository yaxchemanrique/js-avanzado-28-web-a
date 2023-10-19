const path = require('node:path');
console.log(path.sep);

const filePath = path.join('folder1', 'folder2', 'elMejorCodigo.js');
console.log(filePath);

const base = path.basename('yaxche/misArchivos/contrasenas/miContrasena.txt');
console.log(base);

const extension = path.extname('yaxche/misArchivos/contrasenas/miContrasena.txt');;
console.log(extension);