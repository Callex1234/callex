const { logger } = require("../config/logger.config");
const Joi = require("joi");
const hotTranferRoute = require("../modal/hottransferRoute.modal");
const hotTranfer = async (req, res) => {
  try {
    const data = hotTranferRoute.find({});
    console.log({ data });
    return res.render("admin/hotTransferRoutes", { data });
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

module.exports = { hotTranfer };
