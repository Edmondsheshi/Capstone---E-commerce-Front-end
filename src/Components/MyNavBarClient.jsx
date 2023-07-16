import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyNavBarClient() {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="/">Game-Vault</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={"/prodotto-registrato"}>Register-product</Link>
          </Nav>
          <Nav>
            <Button >Cart</Button>
          </Nav>
          <Nav>
            <Link className='nav-link' to={"/login"}>Login</Link>
            <Link className='nav-link' to={"/register"}>Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}