// routes/stats.js
const express = require('express');
const router = express.Router();
const statsController = require('../Controllers/StatsController');
// ✅ Create new stats
router.post('/create', statsController.createStats);

// ✅ Get all stats
router.get('/get', statsController.getAllStats);

// ✅ Get stats by ID
router.get('/get/:id', statsController.getStatsById);

// ✅ Update stats by ID
router.put('/update/:id', statsController.updateStats);

// ✅ Delete stats by ID
router.delete('/delete/:id', statsController.deleteStats);

module.exports = router;
