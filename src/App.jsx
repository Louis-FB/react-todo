import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todos from "./Todos";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState([]);

  const [showForm, setShowForm] = useState(true);

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
    <div className="np-container">
      <div className="np-body">
        <div className="np-body-page">
          <div className="np-binder"></div>
          <Header
            todos={todos}
            setTodos={setTodos}
            showForm={showForm}
            setShowForm={setShowForm}
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
