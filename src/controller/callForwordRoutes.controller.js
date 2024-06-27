const { logger } = require("../config/logger.config");
const Joi = require("joi");
const callForwordRoutes = require("../modal/callForwordRoute.modal");
const index = async (req, res) => {
  try {
    const Call = callForwordRoutes.find({});
    console.log({ Call });
    return res.render("admin/callForwardRoutes", { Call });
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

module.exports = { index };
