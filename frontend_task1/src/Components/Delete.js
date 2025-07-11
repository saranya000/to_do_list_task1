import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './delete.css'; 

function Delete({onClick})
{
  return (
    <>
        <button id="dlt_btn" style={{ padding: '5px 10px', minWidth: '25%' }}onClick={onClick}><DeleteIcon/>Delete</button>
    </>
  )
}

export default Delete


