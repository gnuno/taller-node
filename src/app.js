//Importamos express
const express = require("express");
const workshopRoutes = require("./routes/workshop.routes");

//creamos la aplicación express
const app = express();

//el use sirve para pasar middlewares, en este caso para parsear nuestro body a json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

//acá utilizamos use para definirle una ruta y el router a utilizar con esa ruta.
app.use("/workshop", workshopRoutes);

//exportamos la aplicación
module.exports = app;
