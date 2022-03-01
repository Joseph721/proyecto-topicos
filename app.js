
/* Se crea una instancia de express para poder utilizar sus modulos */
const express = require('express');

/* Se crea una instancia de handlebars para el motor de vistas */
const hbs = require("express-handlebars");


/* Se trabaja a nivel de app y se requiere de express*/ 
const app = express();

// Router de la app 
const router = require('./routes/routes');

/* Middlewares para recibir datos en formato json, analizar los request y utilizar de manera publica algunos elementos.*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static("public"));

// Motor de vistas express-handlebars
app.engine(
  ".hbs",
  hbs.engine({
    defaultLayout: "index",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use('/', router);


/* Se utiliza un puerto por defecto o el 3000 para poder visualizar la aplicación web en un navegador. */
const port = process.env.PORT || 3000; // Variable de entorno
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}...`);
});

