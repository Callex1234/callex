const { logger } = require("../config/logger.config");
const Routes = require("../modal/outRoutes.modal");

const routes = async (req, res) => {
  try {
    return res.render("admin/routes");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

const addroutes = async (req, res) => {
  try {
    console.log(req.body);
    const addroutes = await Routes.create({
      routeName: req.body.routename,
      routeDesc: req.body.description,
      active: req?.body?.active ? req?.body?.active : false,
      digits: req.body.digit,
      routeMethod: req.body.routemethod,
      availableTrunk: req.body.availableTrunk,
      selectedTrunk: req.body.selectedTrunk,
    });
    console.log("outboundRoute created:", addroutes);

    return res.render("admin/routes");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

module.exports = { routes, addroutes };
