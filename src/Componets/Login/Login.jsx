// src/components/Login.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role) {
      login(role);
      navigate(`/${role}`);
    } else {
      setError('Please select a role.');
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formRole">
        <Form.Label>Select Role</Form.Label>
        <Form.Control
          as="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
