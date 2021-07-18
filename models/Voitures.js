const mongoose = require("mongoose");

const VoitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,

    default: 0.0,
  },

  images: [
    {
      url: {
        type: String,
      },
    },
  ],
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("voitures", VoitureSchema);
