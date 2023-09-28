import React from 'react';
import './Home.css'; 

function Homepage() {
  return (
    <>
    <div className="container">
      <h2>Welcome to the E-Learning Platform</h2>
      <p>Find and enroll in courses to start learning.</p>
      <a href="/courses" className="button">Explore Courses</a>
     
    </div>
    </>
  );
}

export default Homepage;
