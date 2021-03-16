import React, { useState } from "react";
import { createTodo } from "../../functions/Todo";
import "./TodoForm.css";
import Spinner from "../Spinner/Spinner";

function TodoForm() {
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState("");

  const handleChange = (e) => {
    setAction(e.target.value);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    createTodo({ action })
      .then((res) => {
        setLoading(false);
        console.log(res);
        window.location.reload(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  console.log(action);
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add a todo"
        value={action}
        onChange={handleChange}
        name="text"
        className="todo-input"
        required
        autoFocus
      />
      {loading ? (
        <Spinner />
      ) : (
        <button className="todo-button">Add todo</button>
      )}
    </form>
  );
}

export default TodoForm;
