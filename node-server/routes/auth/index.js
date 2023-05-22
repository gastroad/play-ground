const express = require("express");
const authController = require("./auth.controller.js");

const router = express.Router();



router.get("/login", authController);
router.put("/:id", authController);



module.exports = router