import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [inputText, setInput] = useState('');
  const [initial, setState] = useState(true);
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

  function strikethroughNote(i) {
    setState(prevState => ({
      ...initial,
      [i]: !prevState[i]
    }));
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
          {notes.map((note, id) => <li key={id} onDoubleClick={() => strikethroughNote(id)} style={initial[`${id}`] ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{note}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
