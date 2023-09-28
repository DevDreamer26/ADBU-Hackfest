import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from './components/navbar/Navbar';
import Home from './components/Homepage/Home'; // Uncomment this import
import Login from './components/register/Login'; // Uncomment this import
import SignUp from './components/register/signUp'; // Uncomment this import
import CourseList from './components/ CourseList/ CourseList';
import CourseDetail from './components/CourseDetail/CourseDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/courses" element={<CourseList />} />
          <Route path="/coursedetails" element={<CourseDetail />} /> {/* Use a different path */}
          <Route path="/" element={<Home />} /> {/* Use a different path */}
          {/* Uncomment the following routes if needed */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
