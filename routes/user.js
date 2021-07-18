const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  getUser,
  updateUser,
} = require("../controllers/userControllers");
const {
  validate,
  userRegister,
  userLogin,
} = require("../middlewares/validate");

const auth = require("../middlewares/auth");

//@create user
router.post("/", userRegister(), validate, createUser);

//@login user
router.post("/auth", userLogin(), validate, loginUser);

//@get user
router.get("/auth", auth, getUser);

//@update user
router.put("/auth", auth, updateUser);

module.exports = router;
