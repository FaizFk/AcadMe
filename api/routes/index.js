const express = require("express");
const router = express.Router();
const { storage } = require("../../configs/cloudinaryConfig");
const multer = require("multer");
const upload = multer({ storage });
const { checkToken } = require("../../middlewares/isLoggedIn");
const authRoutes = require("./auth");
const resourceRoutes = require("./resources");
const userController = require("../controllers/user");

router.use("/auth", authRoutes);
router.use("/resources", resourceRoutes);
router
  .route("/profile")
  .get(checkToken, userController.getProfile)
  .put(checkToken, upload.single("avatar"), userController.updateProfile);

module.exports = router;
