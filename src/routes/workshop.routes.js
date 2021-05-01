//Router es la feature de express que vamos a utilizar cada vez que querramos hacer enrutamientos,
//en el router definimos los métodos a recibir por parte del cliente, la ruta y su handler
const router = require("express").Router();
const {
  getAllWorkshops,
  getById,
  createWorkshop,
  editWorkshop,
  deleteWorkshop,
} = require("../resources/workshop.resource"); //handlers importados del resource

router.get("/", getAllWorkshops);
router.post("/", createWorkshop);
router.get("/:id", getById);
router.put("/:id", editWorkshop);
router.delete("/:id", deleteWorkshop);

//exportamos el router de workshop
module.exports = router;
