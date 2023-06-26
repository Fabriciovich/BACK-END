const express = require('express');
const app = express();
const miRuta = require('./src/routes/prueba.routes');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', miRuta);

app.listen(PORT, () => {
    console.log('server on port', PORT);
})






