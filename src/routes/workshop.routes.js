const router = require("express").Router();
const {
  getAllWorkshops,
  getById,
  createWorkshop,
  editWorkshop,
  deleteWorkshop,
} = require("../resources/workshop.resource");

router.get("/", getAllWorkshops);
router.post("/", createWorkshop);
router.get("/:id", getById);
router.put("/:id", editWorkshop);
router.delete("/:id", deleteWorkshop);

module.exports = router;
