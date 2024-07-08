import React from "react";

export default function Todo({ onComplete, onDelete, todo }) {
  return (
    <div className="todo">
      <p className={todo.completed ? "completed" : ""}>{todo.data}</p>{" "}
      <button onClick={() => onComplete(todo.id)}>Complete</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
