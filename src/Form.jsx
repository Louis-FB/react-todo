import React from "react";
import { useState, useEffect } from "react";

export default function Form({ todos, setTodos }) {
  const [noteData, setNoteData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: todos.length + 1,
      data: e.currentTarget[0].value,
    };

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
        //onChange={(e) => setNoteData(e.currentTarget.value)}
      />
      <button>Submit</button>
      {noteData}
    </form>
  );
}
