const metodos = {}

metodos.getUsers = (req, res) => {

    const users = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25
    }

    res.status(200).json({users});

}

metodos.crearUsuario = (req, res) => {

    const {nombre, apellido, edad} = req.body;

    const newUser = { nombre, apellido, edad };

    res.status(200).json({
        msg: 'Usuario creado Correctamente',
        newUser
    });
}


module.exports = metodos;