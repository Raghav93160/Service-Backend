const Testimonial = require("../Models/Testimonials");
// ✅ Create Testimonial with single file upload
exports.createTestimonial = async (req, res) => {
  try {
    const { name, position, company, service, project, text, rating } = req.body;
    const image = req.file ? req.file.path : "";

    // console.log(image);

    if (!name || !text || !rating) {
      return res.status(400).json({ message: "Name, text and rating are required" });
    }

    const newTestimonial = await Testimonial.create({
      name,
      position,
      company,
      service,
      project,
      text,
      rating,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      newTestimonial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// ✅ Get all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching testimonials", error: error.message });
  }
};

// ✅ Get single testimonial by ID
exports.getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json(testimonial);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching testimonial", error: error.message });
  }
};

// ✅ Update testimonial
exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, company, service, project, text, rating } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updateData = { 
      name, position, company, service, project, text, rating 
    };
    
    // Only update image if new file is uploaded
    if (image) {
      updateData.image = image;
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedTestimonial) return res.status(404).json({ message: "Testimonial not found" });

    res
      .status(200)
      .json({ message: "Testimonial updated successfully", testimonial: updatedTestimonial });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in update API",
      error,
    });
  }
};

// ✅ Delete testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTestimonial = await Testimonial.findByIdAndDelete(id);
  
    if (!deleteTestimonial) return res.status(404).json({ message: "Testimonial not found" });
  
    res
      .status(200)
      .json({ message: "Testimonial Deleted successfully", deleteTestimonial });
  } catch (error) {
     console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in delete API",
      error,
    });
  }
};