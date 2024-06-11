const outBoundTrunk = ("../modal/outboundtrunk.modal");
const { logger } = require("../config/logger.config");

const trunk = async (req, res) => {
    try {

        return res.render("admin/outBoundTrunk");
    }
    catch (error) {
        logger.error("Error in crm.crm => " + error.message);
        console.log(error);
        logger.error(JSON.stringify(error));
    }
};

module.exports = { trunk};