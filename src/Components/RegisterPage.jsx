import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const formHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const formSubmittedHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    try {
      await axios.post('http://localhost:3001/users', user, config);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-register">
      <div className='input-text'>
        <Form onSubmit={formSubmittedHandler}>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Control type="text" name="name" placeholder="Enter name" onChange={formHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Lastname">
            <Form.Control type="text" name="lastname" placeholder="Enter lastname" onChange={formHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Phone">
            <Form.Control type="text" name="phone" placeholder="Enter phone" onChange={formHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Email">
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={formHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Control type="password" name="password" placeholder="Enter password" onChange={formHandler} />
          </Form.Group>

          <div className='buttons-login'>
            <Form.Group className="mb-3" controlId="Button">
              <Button variant="dark" type='submit'>Submit</Button>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
}