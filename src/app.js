const express = require("express");
const workshopRoutes = require("./routes/workshop.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.use("/workshop", workshopRoutes);

module.exports = app;
