import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent';
import Button from './Button';
import TaskList from './TaskList';
import EditDialog from './Editdialog';
import axios from 'axios';
import './taskmanagercss.css'; 

function TaskManager() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState("");

  function onTaskEnter(event) {
    setValue(event.target.value);
  }

  const handleSubmit = async () => {
    if (value.trim()) {
      try {
        await axios.post("http://localhost:8080/tasks/pt", {
          taskName: value,
          status: "Incomplete",
          addedOn: new Date().toISOString().slice(0, 10)
        });
        setValue("");
        fetchTasks();
      } catch (error) {
        console.log("The error we face while posting is ", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/dlt/${id}`);
      fetchTasks();
    } catch (error) {
      console.log("The error we get while deleting is ", error);
    }
  };

  const openEditDialog = (id, taskName) => {
    setEditId(id);
    setEditedText(taskName);
    setOpenDialog(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:8080/tasks/edit/${editId}`, {
        id: editId,
        taskName: editedText
      });
      setOpenDialog(false);
      setEditedText("");
      setEditId(null);
      fetchTasks();
    } catch (error) {
      console.log("Error editing task:", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tasks/gtd");
      setTasks(response.data);
    } catch (error) {
      console.log("The error we face while getting data is ", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
    <div className="sparkle-container">
      <div className="sparkles">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="task-header">
  <h3 className="task-heading">Your Sparkling To-Do List</h3>
  <div className="task-inputs">
    <InputComponent value={value} onToggle={onTaskEnter} />
  </div>
  <span >
    <button className="add-task-btn" onClick={handleSubmit}>Add Task</button>
    </span>
</div>
      <TaskList propsArray={tasks} onDelete={handleDelete} onEdit={openEditDialog} />
      <EditDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSaveEdit}
        editedText={editedText}
        setEditedText={setEditedText}
      />
    </div>
    </>
  );
}

export default TaskManager;
