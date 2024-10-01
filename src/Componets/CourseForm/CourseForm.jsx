// Example usage in a component
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const AddCourseForm = () => {
  const { addCourse } = useContext(GlobalContext);
  const [newCourse, setNewCourse] = useState({
    id: Math.random(), // Replace with a better ID generation method
    title: '',
    description: '',
    teacherId: 1, // Example teacher ID
    students: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    setNewCourse({ id: Math.random(), title: '', description: '', teacherId: 1, students: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Title"
        value={newCourse.title}
        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Course Description"
        value={newCourse.description}
        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};
