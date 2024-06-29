const { logger } = require("../config/logger.config");
const Joi = require("joi");
const callForwordRoutes = require("../modal/callForwordRoute.modal");
const outBoundTrunk = require("../modal/outBoundTrunk.modal");
const index = async (req, res) => {
  try {
    const Call = await callForwordRoutes.find({});
    const outboundTruck = await outBoundTrunk.find({});

    return res.render("admin/callForwardRoutes", { Call, outboundTruck });
  } catch (err) {
    logger.error("Error in callforwordroute.index => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/callforward");
  }
};

const createCallforword = async (req, res) => {
  try {
    console.log(req.body);

    const addroutes = await callForwordRoutes.create({
      name: req.body.name,
      desc: req.body.description,
      active: req?.body?.active ? true : false,
      digits: req.body.digits,
      selectedTrunk: req.body.selectedTrunk,
    });

    console.log(addroutes);
    return res.redirect("/admin/callforward");
  } catch (err) {
    logger.error("Error in callforwordroute.creat => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/callforward");
  }
};

const updateCallforword = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const { name, desc, active, digits, availableTrunk, selectedTrunk } =
      req.body;

    const updateroutes = await callForwordRoutes.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        desc: req.body.description,
        active: req?.body?.active ? true : false,
        digits: req.body.digits,
        selectedTrunk: req.body.selectedTrunk,
      },
      { new: true }
    );

    console.log(updateroutes);
    return res.redirect("/admin/callforward");
  } catch (err) {
    logger.error("Error in callforwordroute.creat => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/callforward");
  }
};

const deleteCallforward = async (req, res) => {
  try {
    const id = req.params.id;
    await callForwordRoutes.findByIdAndDelete(id);
    console.log({ id });
    return res.redirect("/admin/callforward");
  } catch (err) {
    logger.error("Error in callforwordroute.creat => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
    return res.redirect("/admin/callforward");
  }
};
module.exports = {
  index,
  createCallforword,
  updateCallforword,
  deleteCallforward,
};
