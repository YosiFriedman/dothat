import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
