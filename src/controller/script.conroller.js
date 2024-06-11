const { logger } = require("../config/logger.config");
const Script = require("../modal/script.modal");
const Scripts = async (req, res) => {
  try {
    const Scripts = await Script.find({});
    return res.render("admin/script", { Scripts });
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};
const addScripts = async (req, res) => {
  try {
    const addscript = await Script.create({
      scriptName: req.body.script,
      isActive: req.body.active,
      isUrl: req?.body?.url ? req?.body?.url : false,
      text: req.body.textcontent,
    });
    console.log("Script created:", addscript);

    return res.redirect("/admin/script");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};
module.exports = { Scripts, addScripts };
