import React from "react";
import { useState, useEffect } from "react";

export default function Form({ todos, setTodos }) {
  const [todoData, setTodoData] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  const checkUniqueNumber = (newID) => {
    if (todos.length === 0) return true;

    for (let i = 0; i < todos.length; ++i) {
      if (todos[i].id == newID) {
        return false;
      }
    }

    return true;
  };

  const generateID = () => {
    let newID = Math.floor(Math.random() * 100000);

    if (checkUniqueNumber(newID) === false) {
      generateID();
    }

    return newID;
  };

  useEffect(() => {
    if (todoData.length > 0) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [todoData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoData.length <= 0) return;

    let newID = generateID();

    let newTodo = {
      id: newID,
      data: todoData,
      completed: false,
    };

    setTodoData("");

    setTodos([...todos, newTodo]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-col">
        <input
          type="text"
          placeholder="new note here..."
          value={todoData}
          onChange={(e) => setTodoData(e.currentTarget.value)}
        />
      </div>
      <div className="form-col">
        <button disabled={disabledBtn} className="symbol-btn">
          &#x2714;
        </button>
      </div>
    </form>
  );
}
