import { useEffect, useState } from 'react';
import './App.css';

import NotesContainer from "./Components/NotesContainer/NotesContainer.js"
import Sidebar from "./Components/Sidebar/Sidebar.js";

function App() {

  const [isNotes, setNotes] = useState(JSON.parse(localStorage.getItem('note-app')) || []);

  const addNote = (color) => {
    const tempNotes = [...isNotes]

    tempNotes.push({
      id: Date.now() + " " + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  }

  const deleteNote = (id) => {
    const tempNotes = [...isNotes]

    const index = tempNotes.findIndex(item => item.id === id)
    if (index < 0) return;
    // console.log(id, index, tempNotes)

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }

  const updateText=(text, id )=>{
    const tempNotes = [...isNotes]

    const index = tempNotes.findIndex(item => item.id === id)
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes)

  }

  useEffect(() => {
    localStorage.setItem('note-app', JSON.stringify(isNotes))
  }, [isNotes])

  return (
    <div className="app">
      <Sidebar addNote={addNote} />
      <NotesContainer notes={isNotes}
        deleteNote={deleteNote} 
        updateText={updateText}/>
    </div>
  );
}

export default App;
