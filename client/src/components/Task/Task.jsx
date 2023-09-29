import React, { useState } from 'react';
import './Task.css';

function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
    { id: 4, text: 'Task 3', completed: false },
  ]);

  const [doneTasks, setDoneTasks] = useState([]);

  const moveTaskToDone = (taskId) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );

      setDoneTasks((prevDoneTasks) => [...prevDoneTasks, taskToMove]);
    }
  };

//   const removeTask = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Tasklist</h1>
      <div className="tasks">
       
        {tasks.map((task) => (
          <div key={task.id} className='tasklist'>
            <p>{task.text}</p>
            <button onClick={() => moveTaskToDone(task.id)}>✔️</button>
            {/* <button onClick={() => removeTask(task.id)}>❌</button> */}
          </div>
        ))}
      </div>

      <div className="done-tasks">
        <h1>Completed</h1>
        {doneTasks.map((task) => (
          <div key={task.id} className='tasklist'>
            <p>{task.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
