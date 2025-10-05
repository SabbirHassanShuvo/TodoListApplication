import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add new todo
router.post("/", async (req, res) => {
  const { title, checkpoints, startTime, endTime } = req.body;
  const newTodo = new Todo({ title, checkpoints, startTime, endTime });
  await newTodo.save();
  res.json(newTodo);
});

// Update (edit todo)
router.put("/:id", async (req, res) => {
  const { title, checkpoints, startTime, endTime } = req.body;
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, checkpoints, startTime, endTime },
    { new: true }
  );
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

export default router;
