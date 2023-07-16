import React from 'react';
import { Container } from 'react-bootstrap';
import ProductPage from '../Components/ProductPage';
import MyFooter from '../Components/MyFooter';
import Jumbotron from './Jumbotron';


export default function HomePage() {

  return (
    <>
      <Jumbotron />
        <Container>
          <ProductPage />
        </Container>
      <MyFooter />
    </>
  );
}