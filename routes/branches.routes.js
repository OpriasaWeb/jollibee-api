const express = require("express")
const router = express.Router();
const { checkToken } = require("../auth/token_validation")
const branchesController = require("../controllers/branches.controller")

router.get("/", checkToken, branchesController.getBranches)
router.get("/:branch_id", checkToken, branchesController.getBranchByID)


module.exports = router