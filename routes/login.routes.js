const express = require("express");
const router = express.Router();

const loginController = require("../controller/login.controller")

router.get("/", loginController.get)

module.exports = router;