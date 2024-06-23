const { logger } = require("../config/logger.config");
const outBoundTrunk = require("../modal/outBoundTrunk.modal");
const Routes = require("../modal/outRoutes.modal");
const Joi = require("joi");

const routes = async (req, res) => {
  try {
    const routes = await Routes.find({});
    const outboundTruck = await outBoundTrunk.find({});
    
    return res.render("admin/routes", { routes , outboundTruck});
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

const addroutes = async (req, res) => {
  try {
    const addroutes = await Routes.create({
      routeName: req.body.routename,
      routeDesc: req.body.description,
      active: req?.body?.active ? req?.body?.active : false,
      digits: req.body.digit,
      routeMethod: req.body.routemethod,
      selectedTrunk: req.body.selectedTrunk,
    });
    console.log("outboundRoute created:", addroutes);

    return res.redirect("/admin/routes");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

const deleteRoutes = async (req, res) => {
  try {
    const id = req.params.id;
    await Routes.findByIdAndDelete(id);
    console.log({ id });
    return res.redirect("/admin/routes");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/routes");
  }
};
const validateRoutes = Joi.object({
  routeName: Joi.string().min(3).max(255).required(),
  routeDesc: Joi.string().min(3).max(255).required(),
  routeMethod: Joi.string().valid("serial", "random").required(),
  active: Joi.boolean().required(),
  availableTrunk: Joi.array().items(Joi.string()).required(),
  selectedTrunk: Joi.array().items(Joi.string()).required(),
  digits: Joi.number().integer().positive().required(),
}).unknown();
const updateRoutes = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    // console.log(req.body);
    const {
      routeName,
      routeDesc,
      active,
      digits,
      routeMethod,
      availableTrunk,
      selectedTrunk,
    } = req.body;
    const updatedRoutes = await Routes.findByIdAndUpdate(
      id,
      {
        routeName: req.body.routename,
        routeDesc: req.body.description,
        routeMethod: req.body.routeMethod,
        availableTrunk: req.body.availableTrunk,
        selectedTrunk: req.body.selectedTrunk,
        active: req.body.active,
        digits: req.body.digits,
      },
      { new: true }
    );

    const { error, value } = validateRoutes.validate(updatedRoutes, {
      allowUnknown: true,
    });

    if (error) {
      console.error("Validation error:", error.details);
      return res.status(400).send({ error: error.details });
    } else {
      console.log("Validated data:", value);
      // Process the validated data here, such as saving to a database
      res.status(200).send(value);
    }

    console.log("updated routes", updatedRoutes);
    return res.redirect("/admin/routes");
  } catch (err) {
    logger.error("Error in route => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

module.exports = { routes, addroutes, deleteRoutes, updateRoutes };
