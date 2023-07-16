import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    // Implementa la logica per aggiungere il prodotto al carrello
    console.log(`Prodotto aggiunto al carrello: ${productId}`);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      const updatedProducts = products.filter((product) => product._id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col
            key={product._id}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="card-product"
          >
            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
              <Card className="border-start-0 border-top-0 shadow-sm m-1 mt-5">
                <Card.Img
                  style={{ height: '300px' }}
                  variant="top"
                  className="rounded"
                  src={product.img}
                />
                <Card.Body style={{ height: '250px' }}>
                  <div className="title">
                    <h5 style={{ textAlign: 'center' }}>{product.title}</h5>
                  </div>
                  <div className="card-body">
                    <p>{product.description}</p>
                    <p>Piattaforma: {product.brand}</p>
                  </div>
                  <div className="shop-now">
                    {product.isAdmin ? (
                      <Button variant="danger" onClick={() => deleteProduct(product._id)}>
                        Elimina
                      </Button>
                    ) : (
                      <>
                        <Button variant="dark" onClick={() => addToCart(product._id)}>
                          Aggiungi al carrello
                        </Button>
                        <span className="p-2">€{product.price}</span>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;