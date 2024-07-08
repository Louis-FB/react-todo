import React from "react";
import { useState, useEffect } from "react";

export default function Form({ todos, setTodos }) {
  const [todoData, setTodoData] = useState("");

  const checkUniqueNumber = (newID) => {
    // condition for generating id
    console.log(newID);
    console.log(todos);
    if (todos.length === 0) return true;

    let unique = true;

    todos.forEach((todo) => {
      // should be for loop
      //console.log(`Todo.id: ${todo.id} newID: ${newID}`);
      if (todo.id === newID) {
        console.log("Matched should return false");
        unique = false;
        return;
        //return false; // not leaving the function ??
      }
    });
    //console.log("Returning true...");

    return unique;
    //return true;
  };

  const generateID = () => {
    let newID = Math.floor(Math.random() * 100000);
    ///let newID = 1;

    if (checkUniqueNumber(newID) == false) {
      // not working
      console.log("Not unique");
      generateID();
    } else {
      console.log("Unique");
    }

    return newID;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newID = generateID();

    let newTodo = {
      id: newID, // temporary
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
