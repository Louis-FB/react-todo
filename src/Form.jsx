import React from "react";
import { useState, useEffect } from "react";

export default function Form({ todos, setTodos }) {
  const [todoData, setTodoData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: todos.length + 1, // temporary
      data: todoData,
      completed: false,
    };

    setTodoData("");

    setTodos([...todos, newTodo]);
  };

  //   useState(() => {
  //     console.log(noteData);
  //   }, noteData);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Text"
        value={todoData}
        onChange={(e) => setTodoData(e.currentTarget.value)}
      />
      <button>Submit</button>
      {/* {noteData} */}
    </form>
  );
}
