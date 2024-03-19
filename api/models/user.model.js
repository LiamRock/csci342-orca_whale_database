const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName: {
            type: String, 
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String, 
            required: true,
        }, 
        avatar: {
            data: Buffer,
            contentType: String
        }
    }
);

const user = mongoose.model("user", userSchema);

module.exports = user;