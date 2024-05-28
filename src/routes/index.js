const express = require("express");
const { handleWelcome } = require("../controller");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).send(` ******  WELCOMW to CALLEX  *******`);
});

routes.get("/test", handleWelcome);

module.exports = routes;
