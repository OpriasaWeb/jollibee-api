const express = require("express");
const router = express.Router();

const menuController = require("../controller/menu.controller")

router.get("/", menuController.get)
router.get("/:menu_id", menuController.getByID)
router.post("/", menuController.add)
router.put("/:menu_id", menuController.update)
router.delete("/:menu_id", menuController.delete)

module.exports = router;