const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const resourceRoutes = require("./resources");

router.use("/auth", authRoutes);
router.use("/resources", resourceRoutes);

module.exports = router;
