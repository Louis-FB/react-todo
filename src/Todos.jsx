import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, onDelete, onComplete }) {
  return (
    <div className="todos-list">
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          onComplete={onComplete}
          onDelete={onDelete}
          todo={todo}
        />
      ))}
    </div>
  );
}
