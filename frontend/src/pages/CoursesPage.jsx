import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/courses/")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>₹{course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
