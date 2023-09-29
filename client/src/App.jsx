import './App.css';
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Navbar from './components/navbar/Navbar';
import Home from './components/Homepage/Home'; // Uncomment this import
// import Login from './components/register/Login'; // Uncomment this import
// import SignUp from './components/register/signUp'; // Uncomment this import
import CourseList from './components/ CourseList/ CourseList';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Quiz from './components/Quiz/Quiz';
import Course1 from './components/course/Course1'
import Course2 from './components/course/Course2'
import Course3 from './components/course/Course3'
import Task from './components/Task/Task'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
        <Route path="/courses" element={<CourseList />} />
        <Route path="/course1" element={<Course1/>} />
        <Route path="/course2" element={<Course2/>} />
        <Route path="/course3" element={<Course3/>} />
          <Route path="/task" element={<Task/>} />

          <Route path="/coursedetails" element={<CourseDetail />} /> {/* Use a different path */}
          <Route path="/" element={<Home />} /> {/* Use a different path */}
          <Route path="/QuizGames" element={<Quiz />} /> {/* Use a different path */}
          {/* Uncomment the following routes if needed */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
