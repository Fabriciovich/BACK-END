const express = require('express'); // Importa el módulo 'express'
const app = express(); // Crea una instancia de la aplicación Express

const miRuta = require('./src/routes/prueba.routes'); // Importa el archivo de rutas

const dotenv = require('dotenv'); // Importa el módulo 'dotenv'
dotenv.config(); // Carga las variables de entorno desde el archivo '.env'

const PORT = process.env.PORT || 3000; // Define el número de puerto

app.use(express.json()); // Configura la aplicación para analizar solicitudes JSON

app.use('/api', miRuta); // Maneja las solicitudes que comiencen con '/api' usando las rutas definidas en 'prueba.routes.js'

app.listen(PORT, () => { console.log('server on port', PORT); }) // Inicia el servidor y muestra un mensaje en la consola





