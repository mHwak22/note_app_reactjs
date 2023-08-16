import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import "../Sidebar/Sidebar.css";
import { Height, WidthFull } from '@mui/icons-material';
const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#e4ee91"]


  const [isListOpen, setListOpen] = useState('false');

  return (
    <div className='sidebar'>
      <AddIcon className='sidebar_icon' onClick={() => setListOpen(!isListOpen)} sx={{ fontSize: 60 }} />
      <ul className={`sidebar_list ${isListOpen?"sidebar_list_active":""}`}>
        {
          colors.map((items, index) =>
            <li
              key={index}
              className='sidebar_list_item'
              style={{ backgroundColor: items }} 
              onClick={()=>props.addNote(items)}/>)
        }

      </ul>


    </div>
  )
}

export default Sidebar