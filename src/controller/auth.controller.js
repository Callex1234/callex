const { logger } = require("../config/logger.config");
const Authorization = require("../modal/auth.modal");
const Joi = require("joi");

const login = (req, res) => {
  try {
    return res.render("auth/login");
  } catch (error) {
    logger.error("Error in auth.login => " + error.message);
    logger.error(JSON.stringify(error));
  }
};
const register = async (req, res) => {
  try {
    const { body } = req;
    const validate = registerSchema.validate(body);
    console.log("validate:", validate);

    if (validate?.error) {
      logger.error("validation in auth.register");
      logger.error(JSON.stringify(validate.error));
      return res.send(validate.error);
    }
    const auth = await Authorization.create({
      username: body.username,
      password: body.password,
    });
    if (auth) {
      return res.status(200).send({ msg: "successfully created", data: auth });
    }
  } catch (error) {
    logger.error("Error in auth.register => " + error.message);
    logger.error(JSON.stringify(error));
  }
};

const registerSchema = Joi.object({
  username: Joi.string().required(),

  password: Joi.string().required(),
});

// -> { value: { username: 'abc', birth_year: 1994 } }

module.exports = { register, login };
