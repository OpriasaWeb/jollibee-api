const express = require("express");
const router = express.Router();

const refSideItem = require('../../controllers/menu_reference/ref_sideitems.controller')

router.post("/", refSideItem.addSideItem)

module.exports = router