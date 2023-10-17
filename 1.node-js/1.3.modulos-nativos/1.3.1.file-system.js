const fs = require('node:fs');
const stats = fs.statSync('./test.txt');
console.log(`
es un archivo? ${stats.isFile()}
es un directorio? ${stats.isDirectory()}
Pesa ${stats.size} bytes
`);