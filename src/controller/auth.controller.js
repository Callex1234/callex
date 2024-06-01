const { logger } = require("../config/logger.config");
const Authorization = require("../modal/auth.modal");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = require("../config/env.config");
const jwt = require("jsonwebtoken");

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

    if (validate?.error) {
      logger.error("validation in auth.register");
      logger.error(JSON.stringify(validate.error));
      return res.send(validate.error);
    }
    const PASSWORD = await bcrypt.hash(body.password, 10);
    const auth = await Authorization.create({
      username: body.username,
      password: PASSWORD,
    });
    if (auth) {
      // return res.render("Admin");
      return res.status(200).send({ msg: "successfully created", data: auth });
    }
  } catch (error) {
    logger.error("Error in auth.register => " + error.message);
    logger.error(JSON.stringify(error));
  }
};

const loginUsers = async (req, res) => {
  try {
    const { body } = req;
    const validate = registerSchema.validate(body);

    if (validate?.error) {
      logger.error("validation in auth.loginUsers");
      logger.error(JSON.stringify(validate.error));
      return res.send(validate.error);
    }
    const auth = await Authorization.findOne({
      username: body.username,
    });
    console.log("auth");
    console.log({ SECRET_KEY });
    if (!auth) {
      return res.status(400).send({ msg: "inccorect User name or password " });
    }
    const match = await bcrypt.compare(body.password, auth.password);
    if (match) {
      const token = jwt.sign(
        { id: auth.id, userName: auth.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, { httpOnly: true });

      return res.redirect("dashboard");

      return res.status(200).send({ msg: "login successfully", data: auth });
    } else {
      return res.status(400).send({ msg: "inccorect User name or password " });
    }
  } catch (error) {
    logger.error("Error in auth.register => " + error.message);
    console.log(error);
    return;
  }
};

const dashboard = (req, res) => {
  try {
    return res.render("Admin");
  } catch (error) {
    logger.error("Error in auth.login => " + error.message);
    logger.error(JSON.stringify(error));
  }
};

const registerSchema = Joi.object({
  username: Joi.string().required(),

  password: Joi.string().required(),
});

module.exports = { register, login, loginUsers, dashboard };
