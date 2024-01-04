const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller")

router.post("/", employeeController.addEmployee)
router.get("/", employeeController.getEmployee)
router.get("/:employee_id", employeeController.getEmployeeByID)
router.put("/:employee_id", employeeController.updateEmployee)
router.delete("/:employee_id", employeeController.deleteEmployee)


module.exports = router