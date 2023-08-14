import React from 'react'

import AddIcon from '@mui/icons-material/Add';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import "../Sidebar/sidebar.css";
import { Height, WidthFull } from '@mui/icons-material';
const sidebar = () => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#e4ee91"]


  return (
    <div className='sidebar'>
      <AddIcon className='sidebar_icon' sx={{ fontSize: 60 }} />
      <ul className='sidebar_list'>
        {
          colors.map((items, index) => 
          <li key={index} 
          className='sidebar_list_item' 
          style={{ backgroundColor: items }} />)
        }

      </ul>


    </div>
  )
}

export default sidebar