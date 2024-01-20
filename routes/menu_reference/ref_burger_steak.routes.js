const express = require("express");
const router = express.Router();

const refBurgerSteak = require('../../controllers/menu_reference/ref_burger_steak.controller')

router.post("/", refBurgerSteak.addBurgerSteak)

module.exports = router