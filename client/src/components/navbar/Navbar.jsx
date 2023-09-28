import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        {/* <li><a href="/coursedetails">Course Details</a></li> */}
        <li><a href="/">Tasks</a></li>
        <li><a href="/">Quiz Games</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;