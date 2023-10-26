const express = require('express');
const port = 3000;

const app = express();
// 'pug'
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // pra probar, generico
    // res.send('Hola Mundo!');
    res.render('index', { text: 'este es texto desde server.js'});
})
/* 
app.get('/users', (req, res) => {
    res.send('lista de usuarios');
})

app.get('/users/new', (req, res) => {
    res.send('formulario para crear nuevo usuario');
})
 */

const usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);
// const profilesRouter = require('./routes/profiles.js');
// app.use('/profiles', profilesRouter);

app.listen(port, () => {
    console.log(`App escuchando en el puerto ${port}`)
})
