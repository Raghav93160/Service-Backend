// routes/coreExpertiseRoutes.js
const express = require("express");
const router = express.Router();

const {
  createCoreExpertise,
  getAllCoreExpertise,
  getSingleCoreExpertise,
  updateCoreExpertise,
  deleteCoreExpertise,
} = require("../Controllers/coreExpertiseController");

// CREATE
router.post("/create", createCoreExpertise);

// GET ALL
router.get("/get", getAllCoreExpertise);

// GET SINGLE
router.get("/get/:id", getSingleCoreExpertise);

// UPDATE
router.put("/update/:id", updateCoreExpertise);

// DELETE
router.delete("/delete/:id", deleteCoreExpertise);

module.exports = router;
