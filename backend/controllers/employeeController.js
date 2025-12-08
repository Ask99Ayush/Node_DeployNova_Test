const Employee = require("../models/Employee");

// CREATE
exports.createEmployee = async (req, res) => {
  const emp = await Employee.create(req.body);
  res.json(emp);
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// LIST
exports.getEmployees = async (req, res) => {
  const list = await Employee.find();
  res.json(list);
};
