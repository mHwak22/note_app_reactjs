import React from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import "../Notes/Notes.css"

let timer = 500, timeout;
const Notes = (props) => {

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);

    const monthNames = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC",]

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    day = day < 10 ? "0" + day : day;

    const month = monthNames[date.getMonth()];

    return hrs + " : " + min + " " + amPm + " " + day + "/" + month;
  }

  const debounce = (func) => {
    clearTimeout(timeout)
    timeout=setTimeout(func, timer);
  }

  const updateText =(text, id)=>{
    debounce(()=>props.updateText(text, id));
  }
  
  return (
    <div className='note' style={{ backgroundColor: props.notes.color }}>
      <textarea className='note_textarea' defaultValue={props.notes.text}
        placeholder='Write your Note here'
        onChange={(event) =>updateText(event.target.value, props.notes.id)}/>
      <div className='note_footer'>
        <p><b>{formatDate(props.notes.time)}</b></p>
        <DeleteForeverIcon className='note_footer_delete'
          onClick={() => props.deleteNote(props.notes.id)} />
      </div>

    </div>
  )
}

export default Notes