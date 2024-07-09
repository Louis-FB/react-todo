import React from "react";

export default function Todo({ index, onComplete, onDelete, todo }) {
  return (
    <div className="todo">
      <div className="todo-data">
        <p className={todo.completed ? "completed" : ""}>
          {index + 1}
          {". "} {todo.data}
        </p>
      </div>
      <div className="todo-btn-cont">
        <button onClick={() => onComplete(todo.id)} className="symbol-btn">
          &#x2714;
        </button>
        <button onClick={() => onDelete(todo.id)} className="symbol-btn">
          &#x2718;
        </button>
      </div>
    </div>
  );
}
