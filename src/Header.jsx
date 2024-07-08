import React from "react";
import { useState } from "react";
import Form from "./Form";

export default function Header({ todos, setTodos, onClearCompleted }) {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="np-header">
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide" : "Show"} form
      </button>
      <button onClick={() => onClearCompleted()}>Clear completed</button>
      {showForm ? <Form todos={todos} setTodos={setTodos} /> : ""}
    </div>
  );
}
