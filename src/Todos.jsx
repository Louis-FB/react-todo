import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, onDelete, onComplete }) {
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          onComplete={onComplete}
          onDelete={onDelete}
          todo={todo}
        />
      ))}
    </div>
  );
}
