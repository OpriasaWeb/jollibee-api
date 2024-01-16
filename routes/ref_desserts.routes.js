const express = require("express");
const router = express.Router();

const refDesserts = require('../controllers/ref_desserts.controller')

router.post("/", refDesserts.addDessert)

module.exports = router