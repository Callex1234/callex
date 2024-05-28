const express = require("express");
const { PORT } = require("./config/env.config");
const cors = require("cors");
const app = express();
const createError = require("http-errors");
const routes = require("./routes");
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "Someting went wrong" });
});

app
  .listen(PORT, () => {
    console.log(`it's alive on port number http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log(`Error is ${error.message}`);
  });
