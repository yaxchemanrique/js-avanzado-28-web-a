const fs = require('node:fs');
const path = require('node:path');
const folder = process.argv[2] ?? '.';

fs.readdir(folder, (err, files) => {
    if(err) {
        console.log(`No se pudo leer el directiorio ${folder}`);
        process.exit(1);
    }
    files.forEach(file => {
        const filePath = path.join(folder, file);
        console.log(filePath);
        //archivo o folder?
        // nombre               //fs.stat
        //fileSize
        //fecha de modificacion
    });
})