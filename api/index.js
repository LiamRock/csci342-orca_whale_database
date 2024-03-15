const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const sightingsRouter = require("./routes/sightings");
app.use("/sightings", sightingsRouter);

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
