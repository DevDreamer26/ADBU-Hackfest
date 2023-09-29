import React from "react";
import './Schedule.css'

function Schedule(){
    const scheduleData = [
        {
          id: 1,
          day: "Monday",
          time: "9:00 AM - 10:30 AM",
          event: "Meeting",
        },
        {
          id: 2,
          day: "Tuesday",
          time: "2:00 PM - 3:30 PM",
          event: "Training",
        },
        {
          id: 3,
          day: "Wednesday",
          time: "11:00 AM - 12:30 PM",
          event: "Presentation",
        },
        
      ];
    return(
       <>
            <div className="schedule-container">
      <h1>Schedule</h1>
      <ul className="schedule-list">
        {scheduleData.map((item) => (
          <li key={item.id} className="schedule-item">
            <div className="day">{item.day}</div>
            <div className="time">{item.time}</div>
            <div className="event">{item.event}</div>
          </li>
        ))}
      </ul>
    </div>
       </>
    )
};
export default Schedule;
