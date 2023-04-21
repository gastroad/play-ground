const express = require("express");
const portfolioController = require("./portfolio.controller");

const router = express.Router();

router.get("/", portfolioController.getAll);
router.get("/:id", portfolioController.getById);

module.exports = router;
