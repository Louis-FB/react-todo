import React from "react";
import { useState, useEffect } from "react";

export default function Form() {
  //   const [noteData, setNoteData] = useState();
  //const ID = 0;
  const [todos, setTodos] = useState([]);
  const [todoData, setTodoData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: 1,
      data: todoData,
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
