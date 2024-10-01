// src/components/AdminDashboard.js
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Table, Button, Form, Modal } from 'react-bootstrap';

const AdminDashboard = () => {
  const { courses, addCourse, users, addUser } = useContext(GlobalContext);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    teacher: '',
  });

  const handleCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleCourseSubmit = () => {
    addCourse(newCourse);
    setShowCourseModal(false);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Button variant="primary" onClick={() => setShowCourseModal(true)}>
        Add Course
      </Button>
      <h3>Courses</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.teacher}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showCourseModal} onHide={() => setShowCourseModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCourseTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newCourse.title}
                onChange={handleCourseChange}
              />
            </Form.Group>
            <Form.Group controlId="formCourseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newCourse.description}
                onChange={handleCourseChange}
              />
            </Form.Group>
            <Form.Group controlId="formCourseTeacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control
                type="text"
                name="teacher"
                value={newCourse.teacher}
                onChange={handleCourseChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCourseModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCourseSubmit}>
            Save Course
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
