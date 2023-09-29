import React from 'react';
import './Home.css';

function Homepage() {
  return (
    <div className="container">
      
      <div >
        <h2 style={{fontSize:'96px',color:"darkblue"}}>Welcome to Etutor</h2>
        <p>Find and enroll in courses to start learning.</p>
      <a href="/courses" className="button">Explore Courses</a>
      </div>
    </div>
  );
}

export default Homepage;
