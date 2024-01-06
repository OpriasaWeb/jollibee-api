const express = require("express");
const router = express.Router();
const { checkToken } = require("../auth/token_validation")
const userController = require("../controllers/user.controller")

router.post("/", checkToken, userController.createUser)
router.get("/", checkToken, userController.getUsers)
router.post("/login", userController.loginUser)

module.exports = router