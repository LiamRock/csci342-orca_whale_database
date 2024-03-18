const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    lat: {
      type: String,
      required: false,
    },
    long: {
      type: String,
      required: false,
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
      required: false,
    },
    user: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
  }
  },
  {
    timestamps: false,
  }
);

const Post = mongoose.model("Post", postsSchema);

module.exports = Post;
