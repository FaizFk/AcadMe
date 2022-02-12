const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.js");

router.route("/").get(indexController.renderIndex);

module.exports = router;
