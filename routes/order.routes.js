const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller")

router.post("/", orderController.orderMenu)
// router.get("/", employeeController.getEmployee)
// router.get("/:employee_id", employeeController.getEmployeeByID)
// router.put("/:employee_id", employeeController.updateEmployee)
// router.delete("/:employee_id", employeeController.deleteEmployee)

module.exports = router