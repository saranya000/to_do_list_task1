import React from 'react'
import Delete from './Delete';
import Edit from './Edit';

function TaskList({propsArray,onDelete,onEdit})
{
    
  var index=1;
  
  return (
    <>
    {/* <h4>Here are your tasks</h4> */}
    <table border='4' style={{ borderCollapse: 'collapse', width: '80%',marginLeft:'10%'}}>
      <thead>
        <tr style={{ textAlign:'center' }}>
          <th>Task Id</th>
          <th>Task Name</th>
          <th>Task Actions</th>
        </tr>
      </thead>
        <tbody style={{ textAlign:'center'}}>
                  
            {propsArray.map((task)=><tr key={task.id} style={{ height: "0px" }} >
              <td style={{ textAlign:'center'}}><span> {index++}</span></td>
              <td style={{ textAlign:'center'}}><span> {task.taskName}</span></td>
              <td style={{ display: 'flex', gap: '10px' , alignItems:'center', justifyContent:'center'}}>
            <Edit onClick={()=>onEdit(task.id)}/>
            <Delete onClick={()=>onDelete(task.id)}/></td>
            </tr>)}    
        
        </tbody>
        </table>
    </>
  )
}

export default TaskList;
