const express = require("express");
const router = express.Router();

const refBurgers = require('../controllers/ref_burgers.controller')

router.post("/", refBurgers.addBurger)

module.exports = router