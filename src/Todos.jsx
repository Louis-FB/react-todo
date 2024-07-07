import React from "react";

export default function Todos({ todos, onDelete, onComplete }) {
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <div key={todo.id}>
          <p className={todo.completed ? "completed" : ""}>{todo.data}</p>
          <button onClick={() => onComplete(todo.id)}>Complete</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
