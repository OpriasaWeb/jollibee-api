const express = require("express");
const router = express.Router();

const refBreakfastMeal = require('../controllers/ref_breakfast_meals.controller')

router.post("/", refBreakfastMeal.addBreakfastMeal)

module.exports = router