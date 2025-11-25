const express = require("express");
const router = express.Router();
const upload = require("../middlerware/uploadMiddleware");

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../Controllers/featureProjectController");

router.post("/create", upload.single("image"), createProject);
router.get("/get", getProjects);
router.get("/get/:id", getProjectById);
router.put("/update/:id", upload.single("image"), updateProject);
router.delete("/delete/:id", deleteProject);

module.exports = router;
