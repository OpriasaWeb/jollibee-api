const express = require("express");
const router = express.Router();

const refSpecialItem = require('../controllers/ref_specialitem.controller')

router.post("/", refSpecialItem.addSpecialItem)

module.exports = router