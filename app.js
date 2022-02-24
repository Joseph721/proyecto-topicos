const express = require('express');

const app = express();


const port = process.env.PORT || 3000; // Variable de entorno
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}...`);
});

