const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sightingSchema = new Schema(
  {
    lat: {
      type: String,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
    species: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Sighting = mongoose.model("Sighting", sightingSchema);

module.exports = Sighting;
