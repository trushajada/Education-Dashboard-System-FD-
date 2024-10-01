// src/components/StudentDashboard.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Table, Button } from 'react-bootstrap'; // Add the Button import

const StudentDashboard = () => {
  const { courses } = useContext(GlobalContext);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <h3>Enrolled Courses</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <Button variant="primary">View Assignments</Button> {/* Button component used here */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentDashboard;
