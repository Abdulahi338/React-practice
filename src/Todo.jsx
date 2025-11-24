import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  function addTask() {
    if (text === "" || text.trim()) {
      const newTask = {
        id: Date.now(),
        task: text,
        completed: false,
      };
      setTodo([...todo, newTask]);
      setText("");
    }
  }

  return (
    <div>
      <h1>Todo-list</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todo.map((t) => (
          <li>{t.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
