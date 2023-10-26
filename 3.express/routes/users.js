const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('lista de usuarios');
})

router.get('/new', (req, res) => {
    res.send('formulario para crear nuevo usuario');
})

// /users/1
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    console.log(req.params);
    res.send(`Obten la pagina de usuario con el ID: ${userId}`);
});

module.exports = router;