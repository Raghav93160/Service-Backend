// routes/testimonials.js
const express = require('express');
const router = express.Router();
const upload = require("../middlerware/uploadMiddleware");
const {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
} = require('../Controllers/testimonialController');

// Routes
router.post('/create', upload.single('image'), createTestimonial); // Single image
router.get('/get', getTestimonials);
router.get('/get/:id', getTestimonialById);
router.put('/update/:id', upload.single('image'), updateTestimonial); // Single image
router.delete('/delete/:id', deleteTestimonial);

module.exports = router;