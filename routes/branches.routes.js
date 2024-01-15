const express = require("express")
const router = express.Router();
const { checkToken } = require("../auth/token_validation")
const branchesController = require("../controllers/branches.controller")

router.get("/", branchesController.getBranches)
router.get("/:branch_id", branchesController.getBranchByID)
router.post("/", branchesController.addBranch)


module.exports = router