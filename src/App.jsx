import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };

  return (
    <>
      <button onClick={() => clearCompleted()}>Clear completed</button>
      <Form todos={todos} setTodos={setTodos} />
      <Todos todos={todos} onDelete={deleteTodo} onComplete={setCompleted} />
    </>
  );
}

export default App;
