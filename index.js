// Importa el módulo 'express'
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Importa el archivo de rutas desde './src/routes/prueba.routes'
const miRuta = require('./src/routes/prueba.routes');

// Importa el módulo 'dotenv'
const dotenv = require('dotenv');

// Importa la función 'probarConexion' desde './src/database/db'
const { probarConexion } = require('./src/database/db');

// Carga las variables de entorno desde el archivo '.env'
dotenv.config();

// Define el número de puerto, utiliza el valor de la variable de entorno PORT si está definida, de lo contrario, usa el puerto 3000
const PORT = process.env.PORT || 3000;

// Configura la aplicación para analizar solicitudes JSON
app.use(express.json());

// Maneja las solicitudes que comiencen con '/api' usando las rutas definidas en 'prueba.routes.js'
app.use('/api', miRuta);

// Llama a la función 'probarConexion' para probar la conexión a la base de datos
probarConexion();

// Inicia el servidor y muestra un mensaje en la consola indicando el número de puerto
app.listen(PORT, () => {
    console.log('server on port', PORT);
});






