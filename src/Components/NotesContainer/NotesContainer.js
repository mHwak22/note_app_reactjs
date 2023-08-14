import React from 'react'

import Notes from "../Notes/notes"

import "../NotesContainer/NotesContainer.css"

const NotesContainer = () => {
  return (
    <div className='note-container'>
      <h2>NOTES</h2>
      <div className='note-container_notes custom-scroll'>
        <Notes notes={{
          text: "mohak",
          time: "2:12 Am",
          color: "red"
        }} />
        <Notes notes={{
          text: "mohak",
          time: "2:12 Am",
          color: "red"
        }} />
        <Notes notes={{
          text: "mohak",
          time: "2:12 Am",
          color: "red"
        }} />
        <Notes notes={{
          text: "mohak",
          time: "2:12 Am",
          color: "red"
        }} />
        <Notes notes={{
          text: "mohak",
          time: "2:12 Am",
          color: "red"
        }} />
        <Notes notes={{
          text: "mohak",
          time: "2:12 Am",
          color: "red"
        }} />
      </div>
    </div>
  )
}

export default NotesContainer