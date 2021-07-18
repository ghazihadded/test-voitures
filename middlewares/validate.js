const { body, validationResult } = require("express-validator");

const userRegister = () => [
  body("name", "please entzer your name").notEmpty(),
  body("email", "please enter your email").isEmail(),
  body("password", "password is require minimum 6 character").isLength({
    min: 6,
  }),
];

const userLogin = () => [
  body("email", "please enter your email").isEmail(),
  body("password", "please enter your password").notEmpty(),
];

const commentValidate = () => [
  body("comment", "please enter your comment").notEmpty(),
];

const VoitureCreate = () => [
  body("name", "please enter your car name").notEmpty(),
  body("price", " your price contained maximum 7 character").isLength({
    max: 7,
  }),
];

const validate = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).send(error.array());
  } else {
    next();
  }
};

module.exports = {
  userRegister,
  validate,
  userLogin,
  VoitureCreate,
  commentValidate,
};
