import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const formHandler = (event) => {
    const { name, value, files } = event.target;

    if (name === 'img') {
      setProduct({
        ...product,
        [name]: files[0],
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const formSubmittedHandler = async () => {
    try {
      const formData = new FormData();
      formData.append('title', product.title);
      formData.append('description', product.description);
      formData.append('price', product.price);
      formData.append('brand', product.brand);
      formData.append('img', product.img);

      await axios.post('http://localhost:3001/products', formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Register</h1>
          <Form className="my-3">
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter title"
                onChange={formHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter description"
                onChange={formHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price"
                onChange={formHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBrand">
              <Form.Control
                type="text"
                name="brand"
                placeholder="Enter brand"
                onChange={formHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Control
                type="file"
                name="img"
                placeholder="Enter Image"
                onChange={formHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formButton">
              <Button variant="dark" onClick={formSubmittedHandler}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}