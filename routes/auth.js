const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.route("/register").get(authController.renderRegisterPage);

router.route("/login").get(authController.renderLoginPage);

module.exports = router;
