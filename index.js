/*El index.js se utiliza generalmente para inicializar tu servidor a la vez que haces las
conexiones a tus bases de datos, o algún otro servicio.*/

//Importamos la aplicación para inicializarla
const app = require("./src/app");

//Definimos el puerto en el que querramos que nuestro server sea levantado
const PORT = 3001;

//app listen para decirle a nuestro servido que se inicie y se quede escuchando en el puerto indicado
app.listen(PORT, () => {
  console.log("Servidor levantado correctamente");
});
