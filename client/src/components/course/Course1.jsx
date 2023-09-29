import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; 

function Course1() {
  const { id } = useParams(); 
  const [course, setCourse] = useState(null);

  useEffect(() => {
  
    axios.get(`http://localhost:8800/api/course/findsinglecourse/${id}`)
      .then((response) => {

        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, [id]);

  return (
    <>
      {course ? (
        <div>
          <h1>{course.name}</h1>
          <div>{course.description}</div>

          <Link to={`/schedule/${id}`}>
            <button>Schedule</button>
          </Link>
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </>
  );
}

export default Course1;
