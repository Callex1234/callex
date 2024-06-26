const { description } = require("joi");
const { logger } = require("../config/logger.config");
const outBoundTrunk = require("../modal/outBoundTrunk.modal");
const outboundTrunkVoip = require("../modal/outboundTrunkVoip.modal");

const trunk = async (req, res) => {
  try {
    const findvoip = await outboundTrunkVoip.find({});
    const outBoundTrunkdata = await outBoundTrunk.aggregate([
      {
        $lookup: {
          from: "outboundtrunkvoips",
          localField: "_id",
          foreignField: "outboundTrunk",
          as: "outboundtrunks",
        },
      },
    ]);
    // console.log(
    //   outBoundTrunkdata[1].outboundtrunks[0].accountID,
    //   "outBoundTrunk ::::::"
    // );
    return res.render("admin/outBoundTrunk", { outBoundTrunkdata, findvoip });
  } catch (error) {
    logger.error("Error in trunk => " + error.message);
    console.log(error);
    logger.error(JSON.stringify(error));
  }
};

const createTrunk = async (req, res) => {
  const addTrunk = await outBoundTrunk.create({
    name: req.body.name,
    description: req.body.description,
    active: req.body.active,
    type: req.body.trunktype,
    channels: req.body.channels,
  });
  if (req.body?.customSetting == "on") {
    await outboundTrunkVoip.create({
      customSetting: true,
      outboundTrunk: addTrunk.id,
      SIPAccount: req.body.SIPAccount,
    });
  } else {
    await outboundTrunkVoip.create({
      customSetting: false,
      outboundTrunk: addTrunk.id,
      type: req.body.type,
      accountID: req.body.accountID,
      IPAddress: req.body.IPAddress,
      password: req.body.password,
      context: req.body.context,
    });
  }
  return res.redirect("/admin/outBoundTrunk");
};

const updateTrunk = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      description,
      channels,
      active,
      trunktype,
      type,
      accountID,
      password,
      IPAddress,
      context,
      SIPAccount,
      customSetting,
    } = req.body;
    const updatedTrunks = await outBoundTrunk.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        description: req.body.description,
        channels: req.body.channels,
        active: req.body.active,
        trunktype: req.body.trunktype,
      },

      { new: true }
    );
    const updatedVoip = await outboundTrunkVoip.findOneAndUpdate(
      { outboundTrunk: id },
      {
        type: req.body.type,
        accountID: req.body.accountID,
        password: req.body.password,
        IPAddress: req.body.IPAddress,
        context: req.body.context,
        SIPAccount: req.body.SIPAccount,
      },
      { new: true }
    );
    console.log(updatedVoip);
    return res.redirect("/admin/outBoundTrunk");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/outBoundTrunk");
  }
};

const deleteTrunks = async (req, res) => {
  try {
    const id = req.params.id;
    await outboundTrunkVoip.findByIdAndDelete(id);
    await outBoundTrunk.findByIdAndDelete(id);
    console.log({ id });
    return res.redirect("/admin/outBoundTrunk");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/outBoundTrunk");
  }
};
module.exports = { trunk, createTrunk, deleteTrunks, updateTrunk };
