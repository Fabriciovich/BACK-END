const router = require('express').Router(); // Crea un enrutador utilizando el módulo 'express'

const metodos = require('../controllers/usuarios.controllers'); // Importa el archivo de controladores de usuarios

const { getUsers, crearUsuario } = metodos; // Extrae las funciones getUsers y crearUsuario del objeto metodos

router.get('/usuarios', getUsers); // Define una ruta GET '/usuarios' que utiliza la función getUsers

router.get('/usuario/:id',); // Define una ruta GET '/usuario/:id' (requiere completarse con una función de controlador)

router.post('/usuarios', crearUsuario); // Define una ruta POST '/usuarios' que utiliza la función crearUsuario

router.put('/usuarios/:id',); // Define una ruta PUT '/usuarios/:id' (requiere completarse con una función de controlador)

router.delete('/usuario/:id',); // Define una ruta DELETE '/usuario/:id' (requiere completarse con una función de controlador)

module.exports = router; // Exporta el enrutador para ser utilizado en otros archivos
