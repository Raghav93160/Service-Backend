const coreExpertise = require("../Models/coreExpertise");

// =====================================
// CREATE Core Expertise
// =====================================
exports.createCoreExpertise = async (req, res) => {
  try {
    const { title, description, completeProjects, technologies } = req.body;

    if (!title || !description || !completeProjects || !technologies) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newExpertise = await coreExpertise.create(req.body);

    res.status(201).json({
      success: true,
      message: "Core Expertise created successfully",
      data: newExpertise,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================
// GET ALL Core Expertise
// =====================================
exports.getAllCoreExpertise = async (req, res) => {
  try {
    const items = await coreExpertise.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================
// GET SINGLE Core Expertise
// =====================================
exports.getSingleCoreExpertise = async (req, res) => {
  try {
    const item = await coreExpertise.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Core Expertise not found",
      });
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================
// UPDATE Core Expertise
// =====================================
exports.updateCoreExpertise = async (req, res) => {
  try {
    const updatedItem = await coreExpertise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: "Core Expertise not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Core Expertise updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================================
// DELETE Core Expertise
// =====================================
exports.deleteCoreExpertise = async (req, res) => {
  try {
    const item = await coreExpertise.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Core Expertise not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Core Expertise deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
