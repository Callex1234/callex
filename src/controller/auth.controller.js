const { logger } = require("../config/logger.config");
const Authorization = require("../modal/auth.modal");

const register = async (req, res) => {
  try {
    const { body } = req;
    console.log("yashahsgdcvxhbjkdjasfx");
    const auth = await Authorization.create({
      username: body.username,
      password: body.password,
    });
    if (auth) {
      console.log(auth);
    }
  } catch (error) {
    logger.error("Error in auth.register => " + error.message);
    logger.error(JSON.stringify(error));
  }
};

module.exports = { register };
