import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Cake.css';
import axios from 'axios';

interface CakeProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
  isTopChoice: boolean;
}

const Cake: React.FC = () => {
  const [cakeProducts, setCakeProducts] = useState<CakeProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Cakes");
  const navigate = useNavigate();
  const handleProductClick = (productId: number) => {
    navigate(`/add-to-cart/${productId}`);
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setSelectedCategory("All Cakes")
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/coffeeProduct/getByCategory`, {
        params: { category:"cake" }
    });   
      setCakeProducts(response.data.response);
    } catch (err) {
      setError("Failed to fetch products.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchProductsBySubCategory = async (subCategory: string) => {
    setSelectedCategory(subCategory)
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/coffeeProduct/getBySubCategory`, 
        { params: { subCategory } }
      );   
      console.log(response.data.response) 
      setCakeProducts(response.data.response);
    } catch (err) {
      setError("Failed to fetch products.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cake-page">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <div className="combo-header p-4 bg-light">
                <h1 className="text-purple">Cakes in Brew Haven for Home Delivery</h1>
                <p className="text-muted">
                    Satisfy your sweet cravings with Brew Haven’s delightful selection of cakes, delivered straight to your doorstep.  
                    Explore our freshly baked treats, perfect for any celebration or simply indulging in a moment of sweetness.
                </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mb-4">
            <div className="sidebar p-3 bg-light">
              <h4 className="text-uppercase text-purple">Cake Categories</h4>
              <div className="category-nav">
                <div className="breadcrumb-nav mb-3">
                  <span>Home</span> / <span>Cakes</span>
                </div>
                <ul className="nav flex-column category-list">
                  {[
                    { name: "All Cakes", path: "all-cakes" },
                    { name: "Chocolate Cakes", path: "choco-cakes" },
                    { name: "Fruit Cakes", path: "fruit-cakes" },
                    { name: "Cake And Flower", path: "cake-and-flower" },
                    { name: "Gift Set And Cake", path: "gift-set-and-cake" },
                    { name: "Choco Gift And Cake", path: "choco-gift-and-cake" },
                    { name: "Premium Cakes", path: "premium-cakes" },
                    { name: "Birthday Cakes", path: "birthday-cakes" },
                    { name: "Wedding Cakes", path: "wedding-cakes" }
                  ].map(({ name, path }) => (
                    <li key={path} className="nav-item">
                      <button 
                        className={`nav-link ${selectedCategory === name ? "bg-purple text-white" : ""}`} 
                        onClick={() => (name === "All Cakes" ? fetchProducts() : fetchProductsBySubCategory(name))}
                      >
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
         </Col>
          <Col md={9}>
            <Row>
              {loading ? (
                <Col className="text-center py-5">
                  <div className="spinner-border text-purple" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </Col>
              ) : (
                cakeProducts.map(product => (
                  <Col md={4} className="mb-4" key={product.id}>
                    <Card className="product-card h-100" onClick={() => handleProductClick(product.id)}>
                      <div className="position-relative">
                        {product.isTopChoice && (
                          <div className="top-choice-badge">
                            <Badge bg="warning" className="position-absolute top-0 start-0 mt-2 ms-2">
                              Top Choices
                            </Badge>
                          </div>
                        )}
                        {product.discount && (
                          <div className="discount-badge">
                            <Badge bg="dark" className="position-absolute bottom-0 end-0 mb-2 me-2">
                              {product.discount}% off
                            </Badge>
                          </div>
                        )}
                        <Card.Img 
                          variant="top" 
                          src={product.image ? `http://localhost:5000/${product.image}` : "No Image"} 
                          alt={product.name} 
                          className="product-image" 
                        />   
                                           </div>
                      <Card.Body>
                        <Card.Title className="product-title text-truncate">{product.name}</Card.Title>
                        <Card.Text className="product-price">RS. {product.price.toLocaleString()}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cake;