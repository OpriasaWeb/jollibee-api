const express = require("express");
const router = express.Router();

const refRiceMeal = require('../../controllers/menu_reference/ref_ricemeals.controller')

router.post("/", refRiceMeal.addRiceMeal)

module.exports = router