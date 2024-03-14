import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy credentials validation
    if (username === 'siva' && password === 'krishna') {
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
        <div>
      <h2 className='main-heading'>Login</h2>
      {error && <p className="error">{error}</p>}
      <Form onSubmit={handleSubmit} className='Form-Element'>
        <Form.Group controlId="formBasicUsername">
          <Form.Label className='user-name'>Username :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='password'>Password  : </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='button'>
          Login
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default Login;