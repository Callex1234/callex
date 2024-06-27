const { logger } = require("../config/logger.config");
const Joi = require("joi");
const callForwordRoutes = require("../modal/callForwordRoute.modal");
const index = async (req, res) => {
  try {
    // const Call = callForwordRoutes.find({});
    return res.render("admin/callForwardRoutes");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

module.exports = { index };
