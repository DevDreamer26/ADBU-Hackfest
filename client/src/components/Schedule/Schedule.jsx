import React, { useEffect, useState } from "react";
import axios from "axios";
import './Schedule.css';
import { useParams } from 'react-router-dom';

function Schedule() {
  const { id } = useParams();
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch the schedule data from your backend API
    axios.get(`http://localhost:8800/api/course/findsinglecourse/${id}`,{ withCredentials: true }) // Replace with your actual API endpoint
      .then((response) => {
        // Set the fetched schedule data in the state
        setScheduleData(response.data.courseschedule);
      })
      .catch((error) => {
        console.error('Error fetching schedule data:', error);
      });
  }, []);

  return (
    <>
      <div className="schedule-container">
        <h1>Schedule</h1>
        <ul className="schedule-list">
          {scheduleData.map((item) => (
            <li key={item.id} className="schedule-item">
              <div className="day">{item.schedule}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Schedule;
