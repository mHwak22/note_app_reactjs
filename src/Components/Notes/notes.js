import React from 'react'

import "../Notes/notes.css"

const notes = (props) => {
 
  return (
    <div className='note'> 
    <textarea className='note_textarea' defaultValue={props.notes.text}/>
    <p>{props.notes.time}</p>
    </div>
  )
}

export default notes