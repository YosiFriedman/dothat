import axios from "axios";

export const createTodo = async (action) =>
  await axios.post("http://localhost:8000/api/todo", action);

export const getTodos = async () =>
  await axios.get("http://localhost:8000/api/todos");

export const removeTodo = async (_id) =>
  await axios.delete(`http://localhost:8000/api/todo/${_id}`);

export const updateTodo = async (_id, done) =>
  await axios.put(`http://localhost:8000/api/todo/${_id}`, done);
