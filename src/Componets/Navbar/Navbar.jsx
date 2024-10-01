import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg" className='text-center'>
      <BootstrapNavbar.Brand href="/">EMS</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/student">Student</Nav.Link>
          <Nav.Link href="/teacher">Teacher</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default NavigationBar;
