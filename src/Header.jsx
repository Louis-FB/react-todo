import React from "react";
import { useState } from "react";
import Form from "./Form";

export default function Header({ todos, setTodos, onClearCompleted }) {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="np-header">
      <div className="header-btn-container">
        <div className="header-btn-col">
          <button onClick={() => setShowForm(!showForm)} className="header-btn">
            {showForm ? "Hide" : "Show"} form
          </button>
        </div>
        <div className="header-btn-col">
          <button onClick={() => onClearCompleted()} className="header-btn">
            Clear completed
          </button>
        </div>
      </div>
      {showForm ? <Form todos={todos} setTodos={setTodos} /> : ""}
    </div>
  );
}
