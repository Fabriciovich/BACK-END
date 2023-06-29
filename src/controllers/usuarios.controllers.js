// Importar el modelo User desde el archivo '../models/usuarios'
const User = require('../models/usuarios');

// Crea un objeto vacío llamado 'metodos'
const metodos = {};

// Define una función 'getUsers' en el objeto 'metodos'
metodos.getUsers = async (req, res) => {
    // Obtiene los usuarios mediante la función findByPk() del modelo User
    const users = await User.findByPk();
    console.log(users);
    // Devuelve una respuesta con el objeto 'users' en formato JSON y código de estado 200 (éxito)
    res.status(200).json({ users });
};

// Define una función 'crearUsuario' en el objeto 'metodos'
metodos.crearUsuario = (req, res) => {
    // Obtiene datos del cuerpo de la solicitud (nombre, apellido, edad)
    const { nombre, apellido, edad } = req.body;

    // Crea un nuevo objeto con los datos recibidos
    const newUser = { nombre, apellido, edad };

    // Devuelve una respuesta con un mensaje y el nuevo usuario en formato JSON y código de estado 200 (éxito)
    res.status(200).json({
        msg: 'Usuario creado Correctamente',
        newUser
    });
};

// Exporta el objeto 'metodos' para ser utilizado en otros archivos
module.exports = metodos;

