var express = require("express");
var app = express();
const multer = require("multer");
const path = require("path");
const router = require("express").Router();
var fs = require("fs");
var bodyParser = require("body-parser");
require("dotenv").config();
app.set("view engine", "ejs");

let Post = require("../models/posts.model");

app.use(bodyParser.urlencoded({ extended: true }));

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json({ result: posts }))
    .catch((err) => req.status(400).json("Error: " + err));
});

router.put("/", upload.single("image"), async (req, res) => {
  const { id, lat, long, species, description, email, newUsername } =
    req.body;

  // Handles for when a user changes their username, updates all posts with associated email.
  if (email) {
    // No new username provided to request.
    if (!newUsername) {
      return res
        .status(400)
        .json({ message: "No new username passed to request." });
    }
    // Update all posts associated with original username.
    try {
      const posts = await Post.updateMany({ email, email },
        {
          user: newUsername,
        }
      );
      return res.status(200).json({ message: "Updated user's posts.",
        postsUpdated: posts.modifiedCount
      });
    } catch (err) {
      return res.status(400).json({ message: "Couldn't update user's posts, or user hasn't posted." });
    }
  }

  let { image } = req.body;

  if (!id) {
    return res.status(400).json({ message: "No id passed to request. " });
  }

  if (req.file && req.file.filename) {
    image = {
      data: fs.readFileSync(
        path.join(__dirname, "..", "uploads", req.file.filename)
      ),
      contentType: "image/jpg",
    };
  }

  try {
    const post = await Post.findByIdAndUpdate(id, {
      lat: lat,
      long: long,
      species: species,
      description: description,
      image: image,
    });
    return res.status(200).json({
      message: `Successfully updated post.`,
      id: `${post.id}`,
      lat: `${post.lat}`,
      long: `${post.long}`,
      species: `${post.species}`,
      user: `${post.user}`,
      description: `${post.description}`,
      image: `${post.image}`,
    });
  } catch (err) {
    return res
      .status(404)
      .json({ message: err.message || `Couldn't find post with id:${id}.` });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
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

  let image = null;

  // Check if req.file.filename is null
  if (req.file && req.file.filename) {
    image = {
      data: fs.readFileSync(
        path.join(__dirname, "..", "uploads", req.file.filename)
      ),
      contentType: "image/jpg",
    };
  }

  const lat = req.body.lat;
  const long = req.body.long;
  const date = formattedDate;
  const time = formattedTime;
  const species = req.body.species;
  const user = req.body.user;
  const email = req.body.email;
  const description = req.body.description;

  const newPost = new Post({
    lat,
    long,
    date,
    time,
    species,
    user,
    email,
    description,
    image,
  });

  await newPost
    .save()
    .then(() => res.json({ result: newPost }))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "No id passed to request. " });
  }

  try {
    post = await Post.findByIdAndDelete(id);
    res.status(200).json({
      message: `Successfully deleted post.`,
      id: `${post.id}`,
      lat: `${post.lat}`,
      long: `${post.long}`,
      species: `${post.species}`,
      user: `${post.user}`,
      description: `${post.description}`,
      image: `${post.image}`,
    });
  } catch (err) {
    return res
      .status(404)
      .json({ message: err.message || `Couldn't find post with id:${id}.` });
  }
});

module.exports = router;
