import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import './Task.css';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch tasks from the backend
    axios.get('http://localhost:8800/api/task/findtask', { withCredentials: true })
      .then((response) => {
        // Set the fetched tasks in the state
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const moveTaskToDone = (taskToMove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToMove.id));
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, taskToMove]);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Tasklist
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4">Tasks</Typography>
          {tasks.map((task) => (
            <Paper key={task.id} className="tasklist">
              <Typography>{task.task}</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => moveTaskToDone(task)}
              >
                Move to Completed
              </Button>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Completed</Typography>
          {doneTasks.map((task) => (
            <Paper key={task.id} className="tasklist">
              <Typography>
                <CheckCircleOutlineIcon style={{ marginRight: '8px' }} />
                {task.task}
              </Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Task;
