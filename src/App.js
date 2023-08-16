import { useState } from 'react';
import './App.css';

import NotesContainer from "./Components/NotesContainer/NotesContainer.js"
import Sidebar from "./Components/Sidebar/Sidebar.js";

function App() {

  const [isNotes, setNotes ]= useState([])

  const addNote=(color)=>{
    const tempNotes=[...isNotes]

    tempNotes.push({
      text:"",
      time:Date.now(),
      color,
    });
    setNotes(tempNotes);
  }

  return (
<div className="app">
  <Sidebar addNote={addNote}/>
  <NotesContainer notes={isNotes}/>
</div>  
  );
}

export default App;
