import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);

// ---------------------- ROUTES -------------------------

// Get all employees
app.get("/api/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Add employee
app.post("/api/employees", async (req, res) => {
  const emp = await Employee.create(req.body);
  res.json(emp);
});

// Delete employee
app.delete("/api/employees/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee Deleted" });
});

// ✅ UPDATE employee (PUT Route)
app.put("/api/employees/:id", async (req, res) => {
  const { name, role, salary } = req.body;

  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    { name, role, salary },
    { new: true } // return updated doc
  );

  res.json(updated);
});

// -------------------------------------------------------

app.listen(process.env.PORT, () => {
  console.log("Backend running on port", process.env.PORT);
});
