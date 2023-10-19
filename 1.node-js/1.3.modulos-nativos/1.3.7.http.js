const http = require('node:http');
// Un servidor unicamente puede recibir (peticiones de cliente) y mandar (respuestas) informacion cumpliendo con el protocolo HTTP (Hyper Text Transfer Protocol)

const server = http.createServer((req, res)=> {
    console.log('request received');
    res.end('Hola desde el servidor!');
})

//Encontrar el primer puerto dsponible
// Comunmete usamos el 3000, 8080, 5500(vscode)
// const PORT = 0;
const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto: http://localhost:${server.address().port}`);
})