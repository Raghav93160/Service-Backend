// models/Stats.js
const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
    projectsCompleted: {
        type: String, // Using string to allow values like "50+"
        required: true
    },
    clientSatisfaction: {
        type: String, // e.g., "98%"
        required: true
    },
    happyClients: {
        type: String, // e.g., "50+"
        required: true
    },
    supportAvailable: {
        type: String, // e.g., "24/7"
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Stats', StatsSchema);
