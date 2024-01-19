const express = require("express");
const router = express.Router();

const refSideItem = require('../controllers/ref_sideitems.controller')

router.post("/", refSideItem.addSideItem)

module.exports = router