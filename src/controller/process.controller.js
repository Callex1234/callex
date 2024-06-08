const { logger } = require("../config/logger.config");

const process = async (req, res) => {
  try {
    return res.render("admin/process");
  } catch (err) {
    logger.error("Error in process.process => " + error.message);
    console.log(error);
    logger.error(JSON.stringify(error));
  }
};

module.exports = { process };
