const fs = require('node:fs');
fs.readdir('.', (err, files) => {
    if(err) {
        console.log('No se pudo leer este directorio');
        return;
    }
    files.forEach(file => console.log(file))

    /* for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file);
    } */
});