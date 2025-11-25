const FeatureProject = require("../Models/Portfolio/featureProject");

// ✅ Create Project (with image upload)
exports.createProject = async (req, res) => {
  try {
    const { title, category, description, tags, gradient, icon, liveUrl } = req.body;
    const image = req.file ? req.file.path : "";

    if (!title || !category || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, Category & Description are required",
      });
    }

    const newProject = await FeatureProject.create({
      title,
      category,
      description,
      tags: tags ? tags.split(",") : [],
      gradient,
      icon,
      image,
      liveUrl,  // ⭐ added
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      project: newProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// ✅ Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await FeatureProject.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching projects",
      error: error.message,
    });
  }
};

// ✅ Get single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await FeatureProject.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching project",
      error: error.message,
    });
  }
};

// ✅ Update project
exports.updateProject = async (req, res) => {
  try {
    const { title, category, description, tags, gradient, icon, liveUrl } = req.body;

    const updateData = {
      title,
      category,
      description,
      gradient,
      icon,
      liveUrl,  // ⭐ added
    };

    if (tags) updateData.tags = tags.split(",");

    if (req.file) {
      updateData.image = req.file.path; // new image uploaded
    }

    const updatedProject = await FeatureProject.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating project",
      error: error.message,
    });
  }
};

// ✅ Delete project
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await FeatureProject.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      deletedProject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting project",
      error: error.message,
    });
  }
};
