import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Task.css';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch tasks from the backend
    axios.get('http://localhost:8800/api/task/findtask')
      .then((response) => {
        // Set the fetched tasks in the state
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const moveTaskToDone = (taskId) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );

      setDoneTasks((prevDoneTasks) => [...prevDoneTasks, taskToMove]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tasklist</h1>
      <div className="tasks">
      {tasks.map((task) => (
        <div key={task.id} className='tasklist'>
          <p>{task.text}</p>
          <button onClick={() => moveTaskToDone(task.id)}>✔️</button>
        </div>
      ))}
      </div>

      <div className="done-tasks">
        <h1>Completed</h1>
        {doneTasks.map((task) => (
          <div key={task.id} className='tasklist'>
            <p>{task.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
