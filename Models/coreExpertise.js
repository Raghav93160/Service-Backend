// models/CoreExpertise.js
const mongoose = require('mongoose');

const coreExpertiseSchema = new mongoose.Schema({

  title: {
    type: String,
     required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completeProjects: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('CoreExpertise', coreExpertiseSchema);