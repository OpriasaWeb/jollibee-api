const express = require("express")
const router = express.Router()

const refPositionsController = require("../controllers/ref_positions.controller")

router.post("/", refPositionsController.addPositionName)
router.get("/", refPositionsController.getAllPositions)

module.exports = router

