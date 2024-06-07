const { logger } = require("../config/logger.config");
const Joi = require("joi");
const CrmView = require("../modal/crmView.modal");
const CrmField = require("../modal/crmField.modal");
const CRM = require("../modal/crm.modal");
const CrmAnswer = require("../modal/crmAnswer.modal");

const crm = async (req, res) => {
  try {
    // const crmView = await CrmView.create({
    //   name: "laku",
    //   customerMessage: "laku customerMessage",
    //   file: "lakhu file",
    // });

    // const crmfield1 = await CrmField.create({
    //   edit: true,
    //   label: "laku label 1",
    //   type: "text",
    //   crmview: crmView.id,
    // });
    // const crmfield2 = await CrmField.create({
    //   edit: false,
    //   label: "laku label 2",
    //   type: "select",
    //   option: {
    //     YES: true,
    //     No: false,
    //   },
    //   crmview: crmView.id,
    // });

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
    return res.render("admin/crm");
  } catch (error) {
    logger.error("Error in crm.crm => " + error.message);
    console.log(error);
    logger.error(JSON.stringify(error));
  }
};

const addCrm = async (req, res) => {
  try {
    console.log(req.body);
    const { crm, Message, file, Edit, label, type, option, Logo } = req.body;

    const crmView = await CrmView.create({
      name: crm,
      customerMessage: Message,
      file: file,
    });

    for (const { data, index } of Edit.map((data, index) => ({
      data,
      index,
    }))) {
      ð;
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
  } catch (error) {
    logger.error(error.message);
    console.log(error);
  }
};

module.exports = { crm, addCrm };
