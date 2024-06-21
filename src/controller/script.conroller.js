const { logger } = require("../config/logger.config");
const Script = require("../modal/script.modal");
const Joi = require("joi");
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
validateScripts = Joi.object({
  script: Joi.string().min(3).max(255).required(),
  active: Joi.boolean().required(),
  url: Joi.boolean().required(),
  textcontent: Joi.string().min(1).required(),
});
const updateScripts = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    // console.log(req.body);
    const { scriptName, isActive, isUrl, text } = req.body;
    const updatedScript = await Script.findByIdAndUpdate(
      id,
      {
        scriptName: req.body.script,
        isActive: req.body.active,
        isUrl: req?.body?.url ? req?.body?.url : false,
        text: req.body.textcontent,
      },
      { new: true }
    );

    console.log("updated script", updatedScript);
    return res.redirect("/admin/script");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

const deleteScripts = async (req, res) => {
  try {
    const id = req.params.id;
    await Script.findByIdAndDelete(id);
    console.log({ id });
    return res.redirect("/admin/script");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/script");
  }
};

const addScripts = async (req, res) => {
  try {
    const { body } = req;
    const validate = validateScripts.validate(body);
    console.log(body);
    if (validate?.error) {
      logger.error("validation in script.create");
      logger.error(JSON.stringify(validate.error));
      return res.redirect("/admin/script");
    }
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

module.exports = { Scripts, addScripts, updateScripts, deleteScripts };
