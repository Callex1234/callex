const { SECRET_KEY } = require("../config/env.config");
const jwt = require("jsonwebtoken");
const { logger } = require("../config/logger.config");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
      return res.redirect("/login");
    } else {
      jwt.verify(token, SECRET_KEY, function (err, decoded) {
        if (err) {
          res.clearCookie(req.cookies);
          return res.redirect("/login");
        }
      });
    }
    return next();
  } catch (error) {
    logger.error("Error in auth.middleware => " + error.message);
    console.log(error);
  }
};

module.exports = {
  verifyToken,
};
