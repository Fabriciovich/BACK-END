const router = require('express').Router();
const metodos = require('../controllers/usuarios.controllers');

const {getUsers, crearUsuario} = metodos


//Nos lista todos los usuarios
router.get('/usuarios', getUsers);

//Nos lista un usuario por su id
router.get('/usuario/:id', );

//Nos crea un usuario
router.post('/usuarios', crearUsuario);

//Nos actualiza un usuario por su id
router.put('/usuarios/:id', );

//Nos elimina un usuario por su id
router.delete('/usuario/:id', );


module.exports = router;