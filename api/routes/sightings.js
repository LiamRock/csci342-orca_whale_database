const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Sighting = require("../models/sightings.model");

// Create an Express app
const app = express();

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

router
  .route("/")
  .get((req, res) => {
    Sighting.find()
      .then((sightings) => res.json(sightings))
      .catch((err) => res.status(400).json("Error: " + err));
  })
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
      .then(() => res.json(newSighting))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
