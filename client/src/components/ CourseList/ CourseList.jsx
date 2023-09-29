import React, { useEffect, useState } from 'react';
import './CourseList.css';
import axios from 'axios';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8800/api/course/findcourse',{ withCredentials: true } )
      .then((response) => {
        
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  return (
    <>
      <div className='listsec'>
        <h2 className='line'>Available Courses</h2>
        <ul className='list'>
          {courses.map((course) => (
            <li key={course._id} className='listli'>
              <a href={`/course/${course._id}`}>{course.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
