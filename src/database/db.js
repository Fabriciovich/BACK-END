const { Sequelize, DataTypes } = require('sequelize');

// Crear una instancia de Sequelize con los detalles de la base de datos
const sequelize = new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

});

// Función para probar la conexión y sincronizar los modelos
const probarConexion = async () => {
    try {
        // Autenticar la conexión a la base de datos
        await sequelize.authenticate();

        // Sincronizar los modelos con la base de datos
        await sequelize.sync();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Exportar la instancia de Sequelize y la función de prueba de conexión
module.exports = { sequelize, probarConexion, DataTypes };







