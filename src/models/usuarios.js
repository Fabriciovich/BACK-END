// Importar el objeto sequelize y DataTypes desde el archivo '../database/db'
const { sequelize, DataTypes } = require('../database/db');

// Definir el modelo User utilizando el método define() proporcionado por Sequelize.
// Se especifica el nombre del modelo como 'User' y se pasa un objeto con las definiciones de las columnas de la tabla.
const User = sequelize.define('User', {
    // Columna 'id' de tipo INTEGER que se autoincrementa y se establece como clave primaria.
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // Columna 'firstName' de tipo STRING que no permite valores nulos (no se permite que sea vacío).
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Columna 'lastName' de tipo STRING.
    lastName: {
        type: DataTypes.STRING
    }
});

// Comprobar si el objeto User es igual al modelo User definido en sequelize.models.User.
// Esto se hace para verificar si la definición del modelo coincide con el modelo almacenado en Sequelize.
console.log(User === sequelize.models.User);

// Exportar el modelo User para que pueda ser utilizado en otros archivos.
module.exports = User;








