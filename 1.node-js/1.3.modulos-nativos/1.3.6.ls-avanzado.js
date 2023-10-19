const fs = require('node:fs');
const path = require('node:path');
const folder = process.argv[2] ?? '.';

fs.readdir(folder, 
    (err, files) => {
        if(err) {
            console.log(`No se pudo leer el directiorio ${folder}`);
            process.exit(1);
        }
        files.forEach(file => {
            const filePath = path.join(folder, file);
            // console.log(filePath);
            fs.stat(filePath, 
                (err, stat)=> {
                    if(err) {
                        console.log('Hubo un error al leer el archivo/directorio ', filePath);
                        process.exit(1);
                    }
                    const isDirectory = stat.isDirectory();
                    const fileType = isDirectory ? 'f' : 'a';
                    const fileSize = stat.size.toString();
                    const modifiedDate = stat.mtime.toLocaleString();

                    console.log(`${fileType} ${filePath.padEnd(30)} ${fileSize.padStart(10)} ${modifiedDate}`);
            })
        });
})