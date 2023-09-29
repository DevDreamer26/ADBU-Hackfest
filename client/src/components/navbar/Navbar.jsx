import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        {/* <li><a href="/coursedetails">Course Details</a></li> */}
        <li><a href="/task">Tasks</a></li>
        <li><a href="/">Quiz Games</a></li>
        <li><a href="/">Naughty fication</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;