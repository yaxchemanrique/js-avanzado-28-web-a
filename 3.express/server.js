const express = require('express');
const port = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }))
// 'pug, hbs'
app.set('view engine', 'ejs');

// Para usar una pagina que requiere contenido dinamico
app.get('/', (req, res) => {
    // pra probar, generico
    // res.send('Hola Mundo!');
    res.render('index', { text: 'este es texto desde server.js'});
}) 

// app.get('/contacto')
// app.get('/mi-perfil')


/* 
Esto es mucha repeticion de /users/
Nuestro codigo debe de ser DRY

app.get('/users', (req, res) => {
    res.send('lista de usuarios');
})

app.get('/users/new', (req, res) => {
    res.send('formulario para crear nuevo usuario');
})
 */

// Para usar una pagina Estática
// app.use(express.static('public'));

const usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);
// const profilesRouter = require('./routes/profiles.js');
// app.use('/profiles', profilesRouter);

app.listen(port, () => {
    console.log(`App escuchando en el puerto ${port}`)
})
