import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/admin">Admin Dashboard</Nav.Link>
        <Nav.Link href="/student">Student Dashboard</Nav.Link>
        <Nav.Link href="/teacher">Teacher Dashboard</Nav.Link>
        <Nav.Link href="/courses/new">Add Course</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
