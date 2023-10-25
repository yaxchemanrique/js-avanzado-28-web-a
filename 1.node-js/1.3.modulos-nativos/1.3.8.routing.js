const http = require('node:http');
const fs = require('node:fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if(req.url === '/') {
        res.end(`
            <h1>Este es el inicio</h1>
            <ul>
                <li><a href='/contacto'> contacto</a></li>
                <li><a href='/mi-perfil'> perfil</a></li>
            </ul>
            `)
    } else if(req.url === '/contacto') {
        res.end('<h1>Página de contacto</h1>');
    } else if(req.url === '/mi-perfil') {
        fs.readFile('./1.node-js/1.3.modulos-nativos/avatar.png', (err, data) => {
            console.log(err)
            if(err) {
                res.statusCode = 500;
                res.end('Internal server error');
            } else{
                res.setHeader('Content-Type', 'image/png');
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Esa pagina todavia no la creamos</h1><a href="/"> Regresar a inicio</a>');
    }
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})