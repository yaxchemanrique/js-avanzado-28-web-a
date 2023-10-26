const express = require('express');
const router = express.Router();
// /users/
// /users/new
// /users/3
// /users/:id

// users/
router.get('/', (req, res) => {
    res.send('lista de usuarios');
})

// users/new
router.get('/new', (req, res) => {
    // res.send('formulario para crear nuevo usuario');
    // todos los render se van a ir a buscar a /views
    res.render('users/new');
})


// forma de enviar informacion: JSON 
// users/
router.post('/', (req, res) => {
    // console.log(res);
    console.log(req.body.firstName);
    res.send('res.send de users.js');
})

// /users/1
// /users/:id
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    console.log(req.params);
    res.send(`Obten la pagina de usuario con el ID: ${userId}`);
});

module.exports = router;