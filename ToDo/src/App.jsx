import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks ] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim() === "") return; // nothing tpo add into list
    setTasks([...tasks, {
      id: Date.now(),
      text: input,
      completed: false
    }]);

    setInput("");

  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed }
        : task
    ));

  }

  return (
    <div>
      <h1>My todo App</h1>

      <div>
        <input type="text" placeholder="Enter your tasks" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id} >
            <span
              onClick={() => toggleTask(task.id)}
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </span>


            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div >

  );


}


export default App;