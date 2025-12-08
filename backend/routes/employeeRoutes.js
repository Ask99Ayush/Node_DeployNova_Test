const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Create
router.post("/", async (req, res) => {
  res.json(await Employee.create(req.body));
});

// Read
router.get("/", async (req, res) => {
  res.json(await Employee.find());
});

// Update
router.put("/:id", async (req, res) => {
  res.json(
    await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

// Delete
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
