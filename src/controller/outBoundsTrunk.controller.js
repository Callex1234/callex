const { description } = require("joi");
const { logger } = require("../config/logger.config");
const outBoundTrunk = require("../modal/outBoundTrunk.modal");
const outboundTrunkVoip = require("../modal/outboundTrunkVoip.modal");

const trunk = async (req, res) => {
  try {
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
    // console.log(outBoundTrunkdata);
    return res.render("admin/outBoundTrunk", { outBoundTrunkdata });
  } catch (error) {
    logger.error("Error in crm.crm => " + error.message);
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
module.exports = { trunk, createTrunk };
