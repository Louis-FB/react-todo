import React, { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };

  return (
    <div className="np-container">
      <div className="np-body">
        <div className="np-body-page">
          <div className="np-binder"></div>
          <Header
            todos={todos}
            setTodos={setTodos}
            onClearCompleted={clearCompleted}
          />
          <Todos
            todos={todos}
            onDelete={deleteTodo}
            onComplete={setCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
