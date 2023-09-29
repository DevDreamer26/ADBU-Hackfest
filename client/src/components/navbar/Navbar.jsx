// import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        {/* <li><a href="/coursedetails">Course Details</a></li> */}
        <li><a href="/task">Tasks</a></li>
        <li><a href="/quiz">Quiz Games</a></li>
        <li><a href="/notification">Notification</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;