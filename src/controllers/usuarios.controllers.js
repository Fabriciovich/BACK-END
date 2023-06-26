const metodos = {} // Crea un objeto vacío llamado 'metodos'

metodos.getUsers = (req, res) => { // Define una función 'getUsers' en el objeto 'metodos'
    const users = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25
    } // Crea un objeto 'users' con información de usuarios

    res.status(200).json({ users }); // Devuelve una respuesta con el objeto 'users' en formato JSON
}

metodos.crearUsuario = (req, res) => { // Define una función 'crearUsuario' en el objeto 'metodos'
    const { nombre, apellido, edad } = req.body; // Obtiene datos del cuerpo de la solicitud

    const newUser = { nombre, apellido, edad }; // Crea un nuevo objeto con los datos recibidos

    res.status(200).json({ // Devuelve una respuesta con un mensaje y el nuevo usuario en formato JSON
        msg: 'Usuario creado Correctamente',
        newUser
    });
}

module.exports = metodos; // Exporta el objeto 'metodos' para ser utilizado en otros archivos
