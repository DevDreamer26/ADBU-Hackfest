import React from 'react'

function Course1() {
  const { id } = useParams(); // Use the useParams hook to get the course ID from the URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Make an HTTP GET request to fetch the details of the course with the specified ID
    axios.get(`http://localhost:8800/api/course/findsinglecourse/${id}`) // Replace with your actual API endpoint
      .then((response) => {
        // Set the fetched course details in the state
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
        <button><a href="/task">Schedule</a></button>
      </div>
    ) : (
      <p>Loading course details...</p>
    )}
  </>
  );
}

export default Course1;
