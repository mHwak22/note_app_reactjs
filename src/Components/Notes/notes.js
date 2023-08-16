import React from 'react'

import "../Notes/Notes.css"

const Notes = (props) => {
 
  return (
    <div className='note' style={{backgroundColor:props.notes.color}}> 
    <textarea className='note_textarea' defaultValue={props.notes.text}/>
    <p>{props.notes.time}</p>
    </div>
  )
}

export default Notes