import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Form setTodos={setTodos} />
      <button onClick={() => console.log(todos)}>Show todos</button>
    </>
  );
}

export default App;
