import React from 'react'

import Notes from "../Notes/Notes.js"

import "../NotesContainer/NotesContainer.css"

const NotesContainer = (props) => {

  const reversArray = (arr) => {
    const array = []

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  }

  const notes = reversArray(props.notes);
  console.log(notes);
  return (
    <div className='note-container'>
      <h2>NOTES</h2>
      <div className='note-container_notes custom-scroll'>
        {
          notes.map((item, index) => <Notes
            key={index}
            notes={item} />)
        }
      </div>
    </div>
  )
}

export default NotesContainer