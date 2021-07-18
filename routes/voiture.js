const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const {
  validate,
  VoitureCreate,
  commentValidate,
} = require("../middlewares/validate");
const {
  createVoiture,
  getAllVoiture,
  getVoitureById,
  addReview,
} = require("../controllers/voitureController");

//@create voitures
router.post("/", auth, VoitureCreate(), validate, createVoiture);

//@getAll voiture
router.get("/all", getAllVoiture);

//@get voiture by id
router.get("/get/:id", getVoitureById);

//@add comment voiture
router.put("/comment/:id", auth, commentValidate(), validate, addReview);

module.exports = router;
