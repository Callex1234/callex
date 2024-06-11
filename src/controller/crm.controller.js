const { logger } = require("../config/logger.config");
const Joi = require("joi");
const CrmView = require("../modal/crmView.modal");
const CrmField = require("../modal/crmField.modal");
const CRM = require("../modal/crm.modal");
const CrmAnswer = require("../modal/crmAnswer.modal");

const crm = async (req, res) => {
  try {
    // const datas = await CrmField.find()
    //   .populate({
    //     path: "crmview",
    //     strictPopulate: false,
    //   })
    //   .exec();

    // const crm = await CRM.create({
    //   name: "crm name",
    //   primaryNumber: "99999999999",
    //   message: "crm message",
    // });
    // console.log(datas);
    // for (const data of datas) {
    //   let crvbrgf = await CrmAnswer.create({
    //     answer: "NICE",
    //     crm: crm._id,
    //     crmfield: data._id,
    //   });
    // }

    // const datadtadtadt = await CrmAnswer.find()
    //   .populate([
    //     {
    //       path: "crmfield",
    //       strictPopulate: false,
    //     },
    //     {
    //       path: "crm",
    //       strictPopulate: false,
    //     },
    //   ])
    //   .exec();
    // console.log(datadtadtadt);
    const crmData = await CrmView.aggregate([
      {
        $lookup: {
          from: "crmfields",
          localField: "_id",
          foreignField: "crmview",
          as: "crmview",
        },
      },
    ]);

    return res.render("admin/crm", { crmData });
  } catch (error) {
    logger.error("Error in crm.crm => " + error.message);
    console.log(error);
    logger.error(JSON.stringify(error));
  }
};

const addCrm = async (req, res) => {
  try {
    const { body } = req;
    const validate = validateCrm.validate(body);
    console.log(body);
    if (validate?.error) {
      logger.error("validation in crm.create");
      logger.error(JSON.stringify(validate.error));
      return res.redirect("/admin/crm");
    }
    const { crm, Message, file, Edit, label, type, option } = req.body;
    console.log("Uploaded file:", req.file);
    const crmView = await CrmView.create({
      name: crm,
      customerMessage: Message,
      file: req.file.filename,
    });

    for (const { data, index } of Edit.map((data, index) => ({
      data,
      index,
    }))) {
      const crmfield1 = await CrmField.create({
        edit: Edit[index],
        label: label[index],
        type: type[index],
        option: option[index].split(",").map((el) => {
          return { [el]: el };
        }),
        crmview: crmView.id,
      });
      console.log(crmfield1);
    }
    return res.redirect("/admin/crm");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
  }
};

const updateCrm = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    const { crm, Message, Edit, label, type, option, fieldid } = req.body;
    console.log("Uploaded file:", req.file);
    const file = req?.file?.filename ? { file: req.file.filename } : {};

    const crmView = await CrmView.findByIdAndUpdate(id, {
      name: crm,
      customerMessage: Message,
      ...file,
    });
    console.log({ crmView });
    for (const { data, index } of Edit.map((data, index) => ({
      data,
      index,
    }))) {
      console.log("fieldid[index]", fieldid[index]);
      const crmfield1 = await CrmField.findByIdAndUpdate(fieldid[index], {
        edit: Edit[index],
        label: label[index],
        type: type[index],
        option: option[index].split(",").map((el) => {
          return { [el]: el };
        }),
        crmview: crmView.id,
      });
      console.log({ crmfield1 });
    }
    return res.redirect("/admin/crm");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/crm");
  }
};

const deleteCrm = async (req, res) => {
  try {
    const id = req.params.id;
    const parent = await CrmView.find({ _id: id });
    const child = await CrmField.find({ crmview: id }).deleteMany();
    await CrmView.find({ _id: id }).deleteMany();
    console.log({ id });
    return res.redirect("/admin/crm");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/crm");
  }
};

const validateCrm = Joi.object({
  crm: Joi.string().required(),
  Message: Joi.string().required(),
  Edit: Joi.array().items(Joi.string().valid("true", "false")).required(), // Assuming Edit array contains boolean values in string format
  label: Joi.array().items(Joi.string()).required(),
  type: Joi.array()
    .items(Joi.string().valid("text", "select", "date"))
    .required(), // Assuming common data types
  option: Joi.array().items(Joi.string().allow("")).required(),
});

module.exports = { crm, addCrm, updateCrm, deleteCrm };
