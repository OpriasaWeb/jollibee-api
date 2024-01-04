const express = require("express");
const router = express.Router();
const { checkToken } = require("../auth/token_validation")
const {
  createUser,
  getAllUsers
} = require("../controllers/user.controller")

router.post("/", createUser)
router.get("/", getAllUsers)

module.exports = router