import React, { useState, useEffect } from "react";
import "./Todo.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { getTodos, removeTodo, updateTodo } from "../../functions/Todo";
import { toast } from "react-toastify";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState("uncompleted");

  const loadTodos = () => getTodos().then((t) => setTodos(t.data));

  const toggleTodo = (_id) => {
    const newTodoList = [...todos];
    const todoItem = newTodoList.find((todo) => todo._id === _id);
    todoItem.done = !todoItem.done;

    updateTodo(_id, todoItem)
      .then((res) => {
        if (res.data.done === true) {
          toast.success(`${res.data.action} is completed 🚀`);
          loadTodos();
        } else {
          toast.warning(`${res.data.action} moved to uncompleted section`);
          loadTodos();
        }
      })
      .catch((err) => {
        if (err.res === 400) {
          toast.error(err.res.data);
        }
      });
  };

  const handleremove = async (_id) => {
    if (window.confirm("are you sure you want to delete?")) {
      removeTodo(_id)
        .then((res) => {
          toast.error(`${res.data.action} is deleted`);
          loadTodos();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            toast.error(err.response.data);
          }
        });
    }
  };

  const getFilteredTodos = () => {
    return todos.filter((todo) =>
      filter === "completed" ? todo.done : !todo.done
    );
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <div className="todo-form">
      <select
          className="todo-select"
          value={filter}
          onChange={(e) => changeFilter(e.target.value)}
        >
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      {getFilteredTodos().map((todo) => (
        <div
          className={todo.done ? "todo-row complete" : "todo-row"}
          key={todo._id}
          onClick={() => toggleTodo(todo._id)}
        >
          <div>{todo.action}</div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => handleremove(todo._id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
