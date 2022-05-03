import React, { useState } from "react";
import { useEffect } from "react";
import NoteItem from "./Note";
import InputArea from "./Input";

function App() {
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

  function addNote(inputText) {
    setNotes((prevValues) => {
      return [...prevValues, inputText]
    });
  }

  function deleteNote(id) {
    setNotes((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onClick = {addNote}
      />
      <div>
        <ul>
          {notes.map((note, id) => <NoteItem
            key={id}
            id = {id}
            text = {note}
            onDoubleClick = {deleteNote}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
