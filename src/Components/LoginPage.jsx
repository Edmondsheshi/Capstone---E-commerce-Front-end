import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/user', user)
      .then((response) => {
        localStorage.setItem('userLogin', response.data);
        navigate('/');
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container-login">
      <div className="login-content">
        <div className="input-control">
          <div className="input">
            <p>
              <input type="text" placeholder="Email" name="email" onChange={formHandler} />
            </p>
            <p>
              <input type="password" placeholder="Password" name="password" onChange={formHandler} />
            </p>
          </div>
          <div className="buttons-login">
            <Button onClick={handleLogin} className="login-button mb-3" variant="dark">
              Login
            </Button>
            <Button onClick={handleRegister} className="register-button" variant="dark">
              Register
            </Button>
            {error && (
              <Alert key="danger" variant="danger">
                {error}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}