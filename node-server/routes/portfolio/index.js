const express = require("express");
const portfolioController = require("./portfolio.controller");

const router = express.Router();

router.get("/", portfolioController.getAll);
router.post("/", portfolioController.post);

router.get("/:id", portfolioController.getById);
router.put("/:id", portfolioController.putById);

router.post("/:id/etc", portfolioController.postEtc);
router.put("/:id/etc/:etcId", portfolioController.putEtcById);


module.exports = router