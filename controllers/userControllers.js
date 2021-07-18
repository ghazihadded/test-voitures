const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  const { name, email, image, password, role } = req.body;
  try {
    const newUser = await User.findOne({ email });
    if (newUser) {
      return res.status(400).json([{ msg: "email has already exist" }]);
    }

    const user = new User({
      name,
      password,
      email,
      image,
      role,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(payload, process.env.SECRET_TOKEN, (err, token) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        token,
        user,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json([
      {
        msg: "informations incorrect",
      },
    ]);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: "Invalid Credentials" }]);
    }

    const mdp = await bcrypt.compare(password, user.password);
    if (!mdp) {
      return res.status(400).json([{ msg: "Invalid Credentials" }]);
    }

    user = await User.findOne({ email }).select("-password");
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(payload, process.env.SECRET_TOKEN, (err, token) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        token,
        user,
      });
    });
  } catch (err) {
    res.status(500).json([
      {
        msg: "informations incorrect",
      },
    ]);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(400).send([{ msg: "user not found" }]);
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json([
      {
        msg: "informations incorrect",
      },
    ]);
  }
};

exports.updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).send([{ msg: "user not found" }]);
    }
    user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: req.body },
      { new: true }
    ).select("-password");
    await user.save();
    res.status(200).send({ succes: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).json([
      {
        msg: "informations incorrect",
      },
    ]);
  }
};
