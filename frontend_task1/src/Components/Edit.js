import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import './edit.css';


function Edit({onClick})
{
  return (
    <div>
      <button id="edit_btn"onClick={onClick}><ModeEditOutlineIcon/></button>
    </div>
  )
}


export default Edit;
