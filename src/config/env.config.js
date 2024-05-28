const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(`./.env.${process.env.NODE_ENV}`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
};
