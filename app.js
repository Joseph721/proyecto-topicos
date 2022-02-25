const express = require('express');
const hbs = require("express-handlebars");

 
const app = express();

// Router de la app 
const router = require('./routes/routes');

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



const port = process.env.PORT || 3000; // Variable de entorno
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}...`);
});

