const express = require("express");
const router = express.Router();

const refBreakfastSandwiches = require('../../controllers/menu_reference/ref_breakfast_sandwiches.controller')

router.post("/", refBreakfastSandwiches.addBreakfastSandwiches)

module.exports = router