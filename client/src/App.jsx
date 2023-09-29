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
import Task from './components/Task/Task'
import Notification from './components/Notification/Noti'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/:id" element={<Course1/>} />
        <Route path="/task" element={<Task/>} />
          <Route path="/quiz" element={<Quiz/>} />

          <Route path="/coursedetails" element={<CourseDetail />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/QuizGames" element={<Quiz />} /> 
          <Route path="/notification" element={<Notification />} /> 
         
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
