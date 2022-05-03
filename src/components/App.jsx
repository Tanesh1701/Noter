import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [inputText, setInput] = useState('');
  const [notes, setNotes] = useState(() => {
    const savednotes = localStorage.getItem("notes");
    if (savednotes) {
      return JSON.parse(savednotes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addNote() {
    setNotes((prevValues) => {
      return [...prevValues, inputText]
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange = {handleChange}/>
        <button onClick={addNote}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {notes.map((note) => <li>{note}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
