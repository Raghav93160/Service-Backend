// controllers/statsController.js

const Stats = require("../Models/Stats");

// ✅ Create new stats
exports.createStats = async (req, res) => {
    try {
        const { projectsCompleted, clientSatisfaction, happyClients, supportAvailable } = req.body;

        if (!projectsCompleted || !clientSatisfaction || !happyClients || !supportAvailable) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newStats = new Stats({
            projectsCompleted,
            clientSatisfaction,
            happyClients,
            supportAvailable
        });

        const savedStats = await newStats.save();
        res.status(201).json(savedStats);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// ✅ Get all stats
exports.getAllStats = async (req, res) => {
    try {
        const stats = await Stats.find();
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// ✅ Get single stats by ID
exports.getStatsById = async (req, res) => {
    try {
        const stats = await Stats.findById(req.params.id);
        if (!stats) return res.status(404).json({ message: 'Stats not found' });

        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// ✅ Update stats by ID
exports.updateStats = async (req, res) => {
    try {
        const updatedStats = await Stats.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedStats) return res.status(404).json({ message: 'Stats not found' });

        res.status(200).json(updatedStats);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// ✅ Delete stats by ID
exports.deleteStats = async (req, res) => {
    try {
        const deletedStats = await Stats.findByIdAndDelete(req.params.id);
        if (!deletedStats) return res.status(404).json({ message: 'Stats not found' });

        res.status(200).json({ message: 'Stats deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
