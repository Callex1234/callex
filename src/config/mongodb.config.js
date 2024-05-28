const mongoose = require("mongoose");
const { DATABASE_URL } = require("./env.config");
const { logger } = require("./logger.config");

mongoose.connect(DATABASE_URL).catch((error) => {
  logger.error(`* * * Database connected failed -> ${error.message} * * *`);
});

const db = mongoose.connection;
db.on("error", (error) => {
  logger.error(`* * * Database connected error -> ${error.message} * * *`);
});
db.once("open", () => {
  logger.info("* * * Database connected successfully * * *");
});

module.exports = db;
