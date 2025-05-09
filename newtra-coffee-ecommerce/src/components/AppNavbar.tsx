import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button, Row, Col } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser, FaTruck, FaTag, FaCalendarAlt, FaTags } from "react-icons/fa";
import CategoriesDropdown from "../components/CategoriesDropdown";

const AppNavbar: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2 w-100">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="me-4">
            <h2 className="mb-0 text-white">
              <span style={{ color: "#ffcc00" }}>B</span>
              <span style={{ color: "#fff" }}>rew </span>
              <span style={{ color: "#ffcc00" }}>H</span>
              <span style={{ color: "#fff" }}>aven</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex flex-grow-1 mx-3 w-100">
              <Form.Control
                type="search"
                placeholder="SEARCH THE ENTIRE STORE..."
                className="me-2 flex-grow-1"
                aria-label="Search"
              />
              <Button variant="warning" className="px-3">
                <FaSearch />
              </Button>
            </Form>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart" className="text-white position-relative ms-3">
                <FaShoppingCart size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                  0
                </span>
              </Nav.Link>
              <Nav.Link as={Link} to="/orders" className="text-white ms-3">
                <FaTags size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/account" className="text-white ms-3">
                <FaUser size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Categories and Features Section */}
      <div className="bg-light py-3 vw-100">
        <Container fluid>
          <Row className="g-2 align-items-center flex-nowrap overflow-auto">
            <Col xs="auto">
              <CategoriesDropdown />
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center text-secondary">
                <FaTruck className="me-2" /> Rush delivery
              </div>
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center text-secondary">
                <FaTag className="me-2" /> On Sale
              </div>
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center text-secondary">
                <FaCalendarAlt className="me-2" /> Events
              </div>
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center text-secondary">
                <FaTags className="me-2" /> Brands
              </div>
            </Col>
            <Col xs="auto" className="ms-auto">
              <div className="d-flex align-items-center text-secondary">
                <FaUser className="me-2" /> For You
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AppNavbar;
