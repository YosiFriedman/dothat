import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import "./TodoList.css";
function TodoList() {
  return (
    <>
      <h1>Welcome to DoThat</h1>
      <h3>start your day right</h3>
      <TodoForm />
      <Todo />
    </>
  );
}

export default TodoList;
