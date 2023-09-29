import React from 'react';
import './Home.css'; 

function Homepage() {
  return (
    <>
    <div className="container">
      <h2 style={{color:'darkblue',fontSize:'100px'}}>Welcome to the Etutor</h2>
      <p>Find and enroll in courses to start learning.</p>
      <button >
      <a href="/courses" className="button" style={{fontSize:'40px'}}>Explore Courses</a>
      </button>
      
     
    </div>
    </>
  );
}

export default Homepage;
