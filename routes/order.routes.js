const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller")

router.post("/", orderController.orderMenu)
router.get("/:queue_id", orderController.getOrder)
router.put("/:order_id/:queue_id", orderController.voidOrder)
// router.get("/", employeeController.getEmployee)
// router.get("/:employee_id", employeeController.getEmployeeByID)

// router.delete("/:employee_id", employeeController.deleteEmployee)

module.exports = router