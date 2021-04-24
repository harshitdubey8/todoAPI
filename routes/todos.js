import express from "express";

import Todo from "../models/Todos.js";

const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send("something went wrong and an error occured :", error);
  }
});

router.post("/todos/add", async (req, res) => {
  const { todo } = req.body;

  try {
    const newTode = new Todo({ name: todo });
    const createTodo = await newTode.save();
    res.status(201).json(createTodo);
  } catch (error) {
    res.status(500).send("something went wrong and an error occured:", error);
  }
});

router.patch("/todos/update/:id", async (req, res) => {
  const { todo } = req.body;
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { name: todo },
      { new: true, useFindAndModify: false }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).send("Something went wrong and an error occured:", error);
  }
});

router.delete("/todos/delete/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).send("something went wrong and an error occured:", error);
  }
});

export default router;
