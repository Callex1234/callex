const { logger } = require("../config/logger.config");
const Joi = require("joi");
const hotTranferRoute = require("../modal/hottransferRoute.modal");
const hotTranfer = async (req, res) => {
  try {
    // const Call = callForwordRoutes.find({});
    return res.render("admin/hotTransferRoutes");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

module.exports = { hotTranfer };
