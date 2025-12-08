const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/test_crud_app")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Todo Schema
const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

// Routes

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add new todo
app.post("/todos", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    completed: false
  });
  await todo.save();
  res.json(todo);
});

// Update todo
app.put("/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
