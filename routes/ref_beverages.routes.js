const express = require("express");
const router = express.Router();

const refBeverages = require('../controllers/ref_beverages.controller')

router.post("/", refBeverages.addBeverage)

module.exports = router