var express = require('express')
var app = express();
const multer = require('multer');
const path = require('path');
const router = require("express").Router();
var fs = require('fs');
var bodyParser = require('body-parser');
require('dotenv').config();
app.set("view engine", "ejs");

let Post = require("../models/posts.model");

app.use(bodyParser.urlencoded({ extended: true }));

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});
const upload = multer({ storage: storage });

router
  .route("/")
  .get((req, res) => {
    Post.find()
      .then((posts) => res.json({ result: posts }))
      .catch((err) => req.status(400).json("Error: " + err));
  })

  router.post("/", upload.single('image'), (req, res) => {
    // Format Date
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; 
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

    const image = {
      data: fs.readFileSync(path.join(__dirname, '..', 'uploads', req.file.filename)),
      contentType: 'image/jpg'
  }

    const lat = req.body.lat;
    const long = req.body.long;
    const date = formattedDate;
    const time = formattedTime;
    const species = req.body.species;
    const user = req.body.user;
    const description = req.body.description;

    const newPost = new Post({
      lat,
      long,
      date,
      time,
      species,
      user,
      description,
      image
    });

    newPost
      .save()
      .then(() => res.json({ result: newPost }))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
