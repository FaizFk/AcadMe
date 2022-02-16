const express = require("express");
const router = express.Router();
const resourcesController = require("../controllers/resources");

router.route("/resources").get(resourcesController.getAll);

module.exports = router;
