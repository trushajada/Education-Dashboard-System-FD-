import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Table, Button } from 'react-bootstrap';

const TeacherDashboard = () => {
  const { courses, students, grades } = useContext(GlobalContext);
  const teacherId = 1; 
  const assignedCourses = courses.filter(course => course.teacherId === teacherId);

  const getStudentName = (id) => {
    const student = students.find(student => student.id === id);
    return student ? student.name : 'Unknown';
  };

  const getGrade = (studentId, courseId) => {
    const grade = grades.find(grade => grade.studentId === studentId && grade.courseId === courseId);
    return grade ? grade.grade : 'N/A';
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <h3>Assigned Courses</h3>
      {assignedCourses.map(course => (
        <div key={course.id}>
          <h4>{course.title}</h4>
          <p>{course.description}</p>
          <h5>Enrolled Students</h5>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {course.students.map(studentId => (
                <tr key={studentId}>
                  <td>{getStudentName(studentId)}</td>
                  <td>{getGrade(studentId, course.id)}</td>
                  <td>
                    <Button variant="primary">Update Grade</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default TeacherDashboard;
