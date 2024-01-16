const express = require("express");
const router = express.Router();

const refChickenJoy = require('../controllers/ref_chickenjoy.controller')

router.post("/", refChickenJoy.addChickenJoy)

module.exports = router