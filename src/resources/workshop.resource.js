const workshops = require("../../workshops.json");
const uuidv4 = require("uuid").v4;

function getAllWorkshops(req, res) {
  res.json(workshops);
}

function createWorkshop(req, res) {
  const body = req.body;

  const newWorkshop = {
    id: uuidv4(),
    name: body.name,
    speaker: body.speaker,
    tech: body.tech,
  };

  workshops.push(newWorkshop);

  res.status(201).json(newWorkshop);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const workshop = workshops.find((w) => id === w.id);

  if (workshop) {
    res.status(200).json(workshop);
  } else {
    res.status(404).end();
  }
}

function editWorkshop(req, res) {
  const body = req.body;
  const id = req.params.id;
  console.log(body);

  const elementoAEditar = workshops.find((e) => id == e.id);
  if (!elementoAEditar) {
    return res.status(404).end();
  }

  elementoAEditar.name = body.name;
  elementoAEditar.speaker = body.speaker;
  elementoAEditar.tech = body.tech;

  res.status(200).json(elementoAEditar);
}

function deleteWorkshop(req, res) {
  const id = req.params.id;

  const index = workshops.findIndex((el) => id == el.id);
  const deleted = workshops.splice(index, 1);

  res.status(200).json(deleted);
}

module.exports = {
  getAllWorkshops,
  createWorkshop,
  getById,
  editWorkshop,
  deleteWorkshop,
};
