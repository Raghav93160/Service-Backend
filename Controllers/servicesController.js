const Service = require("../Models/Services");

// Add new service
exports.addService = async (req, res) => {
  try {
    const { title, description ,price, icon, expertiseTitle, expertise, perfectFor } =
      req.body;

    const newService = await Service.create({
      title,
      description,
      price,
      icon,
      expertiseTitle,
      expertise,
      perfectFor,
    });

    res.status(201).json({
      success: true,
      message: "Service added successfully",
      data: newService,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding service",
      error: error.message,
    });
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching services",
      error: error.message,
    });
  }
};

// Get all services
exports.getIdServices = async (req, res) => {
  const { id } = req.params;

  try {
    const services = await Service.findById(id);
    res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching services",
      error: error.message,
    });
  }
};

exports.updateServices = async (req, res) => {
  const { id } = req.params;
  const { title, description,price, icon, expertiseTitle, expertise, perfectFor } =
    req.body;

  try {
    const updateservices = await Service.findByIdAndUpdate(id, {
      title,
      description,
      price,
      icon,
      expertiseTitle,
      expertise,
      perfectFor,
    });
    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updateservices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching services",
      error: error.message,
    });
  }
};


exports.deleteServices = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteservices = await Service.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
      data: deleteservices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching services",
      error: error.message,
    });
  }
};