import React from 'react';
import './inputcomponentcss.css'; 
import { FaRegClipboard } from 'react-icons/fa'; 

function InputComponent({ value, onToggle }) {
  return (
    <div className="input-wrapper">
      <FaRegClipboard className="input-icon" />
      <input
        id="task-input"
        type="text"
        value={value}
        onChange={onToggle}
        required
      />
      <label htmlFor="task-input">Add your task here...</label>
    </div>
  );
}

export default InputComponent;
