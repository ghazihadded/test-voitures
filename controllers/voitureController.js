const Voiture = require("../models/Voitures");
const User = require("../models/User");

exports.createVoiture = async (req, res) => {
  try {
    const voiture = await Voiture.create(req.body);
    res.status(200).json({
      voiture,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send([
      {
        msg: "server error",
      },
    ]);
  }
};

exports.getAllVoiture = async (req, res) => {
  try {
    const voitures = await Voiture.find().sort({ date: -1 });
    res.status(200).json({
      voitures,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json([{ msg: "server error" }]);
  }
};

exports.getVoitureById = async (req, res) => {
  try {
    const voiture = await Voiture.findOne({ _id: req.params.id });

    if (!voiture) {
      return res.status(400).json([{ msg: "voiture not found" }]);
    }
    res.status(200).json({
      voiture,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json([{ msg: "server error" }]);
  }
};

exports.addReview = async (req, res) => {
  const { comment } = req.body;
  try {
    const voiture = await Voiture.findOne({ _id: req.params.id });

    if (!voiture) {
      return res.status(400).json([{ msg: "voiture not found" }]);
    }
    const user = await User.findById(req.user.id);
    const reviews = { comment, user: req.user.id, name: user.name };

    voiture.reviews.unshift(reviews);

    await voiture.save();

    res.status(200).json({ reviews: voiture.reviews });
  } catch (err) {
    console.log(err);
    res.status(500).json([{ msg: "server error" }]);
  }
};
