const express = require("express");
const { PORT } = require("./config/env.config");
const cors = require("cors");
const app = express();
const createError = require("http-errors");
const routes = require("./routes");
const path = require("path");
const multer = require("multer");
const { logger } = require("./config/logger.config");
const cookieParser = require("cookie-parser"); // Add this line.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/"); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Specify the file name
  },
});
const upload = multer({ storage: storage });

require("./config/mongodb.config");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Add this line
app.use(routes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
// middleware
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
    logger.info(`* * * CALLEX * * *`);
    logger.info(`* * * http://localhost:${PORT} * * *`);
  })
  .on("error", (error) => {
    logger.error(`Error is ${error.message}`);
    logger.error(JSON.stringify(error));
  });
