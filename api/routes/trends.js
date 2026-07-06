const express = require("express");
const router = express.Router();
const crypto = require("crypto")
const Trend = require("../models/trends.model");


function fingerprintSightings(sightings) {
    const ids = sightings.map((s) => s.entry_id).sort();
    const joined = ids.join(",");
    return crypto.createHash("sha256").update(joined).digest("hex");
}

function summarizeSightings(sightings) {
    if (sightings === 0) {
        return "No orca sightings have been reported recently."
    }

    const lines = sightings.map((s) => {
        const time = new Date(s.created).toLocaleString();
        const notes = s.data_source_comments || "no additional details";
        return `- ${time}: ${s.no_sighted} orca(s) sighted near (${s.latitude}, ${s.longitude}). Notes: ${notes}`;
    });

    return lines.join("\n");
}

async function getAIAnalysis(summaryText) {
    const prompt = `You are a marine biologist who specializes in orcas of WA state. You will receive a list of recent sighting information and write a report on trends in activity. Focus on locations they've visited (include the location (notable named areas they were near such as towns, view points, etc, rather than coordinates), date, number of orcas, and pod if known), where they're going, what they're doing, and where you think they might go next based on the data — if the data doesn't give any clear indication, say that it's unclear rather than guessing. Ensure the report is written in simple terms that any non-scientist orca-enthusiate could understand. Respond ONLY with valid JSON in this exact shape, no other text: { "date": "Month Day, Year", "report": "Your written report as a single string" } Sighting data:\n\n${summaryText}`;

    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": process.env.GEMINI_API_KEY,
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json",
                    thinkingConfig: { thinkingBudget: 0 },
                },
            }),
        }
    );

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    return JSON.parse(rawText);
}

router.get("/", async (req, res) => {
    try {
        const response = await fetch("https://acartia.io/api/v1/sightings/current");
        const data = await response.json();

        const waOrcaSightings = data.filter((s) => 
            s.type === "Orca" &&
            s.latitude >= 47 && s.latitude  <= 49 &&
            s.longitude >= -123.5 && s.longitude <= -122
        );

        const currentFingerprint = fingerprintSightings(waOrcaSightings);
        const cachedTrend = await Trend.findOne().sort({ createdAt: -1 });

        let aiResponse;

        if (cachedTrend && cachedTrend.fingerprint === currentFingerprint) {
            aiResponse = cachedTrend.summary;
        } else {
            aiResponse = await getAIAnalysis(summarizeSightings(waOrcaSightings));
            await Trend.findOneAndUpdate(
                {},
                { fingerprint: currentFingerprint, summary: aiResponse },
                { upsert: true, new: true }
            );
        }

        res.status(200).json({
            sightings: waOrcaSightings,
            summary: aiResponse,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching sighting data" });
    }
});

module.exports = router;