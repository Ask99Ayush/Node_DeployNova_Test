const express = require("express");
const router = express.Router();
const {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees
} = require("../controllers/employeeController");

router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.get("/", getEmployees);

module.exports = router;
