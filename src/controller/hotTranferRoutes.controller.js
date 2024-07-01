const { logger } = require("../config/logger.config");
const Joi = require("joi");
const hotTranferRoute = require("../modal/hottransferRoute.modal");
const outBoundTrunk = require("../modal/outBoundTrunk.modal");
const hotTranfer = async (req, res) => {
  try {
    const Data = await hotTranferRoute.find({});
    const outboundTruck = await outBoundTrunk.find({});
    return res.render("admin/hotTransferRoutes", { Data,outboundTruck });
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

const createHotTranfer = async (req, res) => {
  try {
    console.log(req.body);

    const addroutes = await hotTranferRoute.create({
      name: req.body.name,
      desc: req.body.description,
      active: req?.body?.active ? true : false,
      digits: req.body.digits,
      selectedTrunk: req.body.selectedTrunk,
    });

    console.log(addroutes);
    return res.redirect("/admin/hotTransferRoutes");
  } catch (err) {
    logger.error("Error in callforwordroute.creat => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/hotTransferRoutes");
  }
};

const updateHotTranfer = async (req, res) => {
  try {
    const id = req.params.id;
   
      console.log(req.body);

    const updateroutes = await hotTranferRoute.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        desc: req.body. description,
        active: req?.body?.active ? true : false,
        digits: req.body.digits,
        selectedTrunk: req.body.selectedTrunk,
      },
      { new: true }
    );

    console.log(updateroutes);
    return res.redirect("/admin/hotTransferRoutes");
  } catch (err) {
    logger.error("Error in callforwordroute.creat => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/hotTransferRoutes");
  }
};

const deleteHotTranfer = async (req, res) => {
  try {
    const id = req.params.id;
    await hotTranferRoute.findByIdAndDelete(id);
    console.log({ id });
    return res.redirect("/admin/hotTransferRoutes");
  } catch (err) {
    logger.error("Error in callforwordroute.creat => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/hotTransferRoutes");
  }
};
module.exports = { hotTranfer,createHotTranfer, updateHotTranfer,deleteHotTranfer };
