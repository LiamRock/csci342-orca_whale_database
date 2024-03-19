const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Sighting = require("../models/sightings.model");

// Parse URL-encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

// Define routes
router
  .route("/")
  // Get all sightings
  .get((req, res) => {
    Sighting.find()
      .then((sightings) => res.json({ result: sightings }))
      .catch((err) => res.status(400).json("Error: " + err));
  })
  // Create a new sighting
  .post((req, res) => {
    // Format Date
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}-${year}`;

    // Format Time
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    const lat = req.body.lat;
    const long = req.body.long;
    const date = formattedDate;
    const time = formattedTime;
    const species = req.body.species;
    const user = req.body.user;
    const description = req.body.description;

    const newSighting = new Sighting({
      lat,
      long,
      date,
      time,
      species,
      user,
      description,
    });

    newSighting
      .save()
      .then(() => res.json({ result: newSighting }))
      .catch((err) => res.status(400).json("Error: " + err));
  })
  .delete(async (req, res) => {
    try {
      const sightingId = req.body._id;
      if (!sightingId) {
        return res.status(400).json({ message: "Sighting ID is required." });
      }
      const deletedSighting = await Sighting.findByIdAndDelete(sightingId);

      if (!deletedSighting) {
        return res.status(404).json({ message: "Sighting not found." });
      }

      return res
        .status(200)
        .json({ message: "Sighting deleted successfully.", deletedSighting });
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error." });
    }
  });

module.exports = router;
