const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder for images
app.use("/uploads", express.static("uploads"));

// Routes
// app.use('/api/auth', require('./Routes/authRoutes'));
app.use('/api/services', require('./Routes/serviceRoutes'));
app.use('/api/testimonials', require('./Routes/testimonialRoutes'));
app.use('/api/feature-projects', require('./Routes/featureProjectRoutes'));
app.use('/api/core-expertise', require('./Routes/coreExpertiseRoutes'));
app.use('/api/stats', require('./Routes/statsRoutes'));

// Test Route
app.get('/', (req, res) => {
  res.send('✅ Server is running successfully!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
