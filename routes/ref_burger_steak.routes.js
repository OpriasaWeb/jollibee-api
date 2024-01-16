const express = require("express");
const router = express.Router();

const refBurgerSteak = require('../controllers/ref_burger_steak.controller')

router.post("/", refBurgerSteak.addBurgerSteak)

module.exports = router