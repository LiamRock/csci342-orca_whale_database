const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendScheme = new Schema(
    {
        fingerprint: {
            type: String,
            required: true,
        },
        summary: {
            date: {
                type: String,
                required: true,
            },
            report: {
                type: String,
                required: true
            },
        },
    },
    {
        timestamps: true,
    }
);

const Trend = mongoose.model("Trend", trendScheme);

module.exports = Trend;