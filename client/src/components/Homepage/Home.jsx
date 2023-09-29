import React from 'react';
import './Home.css';

function Homepage() {
  return (
    <div className="container">
      
      <div className="text-container">
        <h2>Welcome to Etutor</h2>
        <p>Find and enroll in courses to start learning.</p>
       
        <div className="image-container">
        <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg" alt="Course Image" />
        <a href="/courses" className="button">Explore Courses</a>
      </div>
      
      </div>
    </div>
  );
}

export default Homepage;
