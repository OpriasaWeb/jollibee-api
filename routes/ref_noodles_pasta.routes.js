const express = require("express");
const router = express.Router();

const refNoodlesPasta = require('../controllers/ref_noodles_pasta.controller')

router.post("/", refNoodlesPasta.addNoodlesPasta)

module.exports = router