const Todo = require("../models/todo");

exports.create = async (req, res) => {
  try {
    const todo = await new Todo(req.body);
    todo.save();
    res.json(todo);
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.update = async (req, res) => {
  const { done } = req.body;
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Update failed");
  }
};
exports.remove = async (req, res) => {
  try {
    const deleted = await Todo.findOneAndDelete({ _id: req.params.id }).exec();
    res.json(deleted);
  } catch (err) {
    res.status(400).send("there is a problem with your request");
  }
};
exports.list = async (req, res) => {
  res.json(await Todo.find({}).sort({}).sort({ createdAt: -1 }).exec());
};
