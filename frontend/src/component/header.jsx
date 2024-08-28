import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import logoImg from '../assets/logo.png';
import cartImg from '../assets/cartimg.png';
import profileImg from '../assets/Profile.png';
import '../style/headerstyle.css';

const Header = ({ userRole }) => {
  const getProfileLink = () => {
    switch (userRole) {
      case 'customer':
        return '/customer-profile';
      case 'supplier':
        return '/supplier-profile';
      case 'employee':
        return '/employee-profile';
      default:
        return '/login';
    }
  };
  
  return (
    <Container fluid className="bg-secondary py-2" style={{ top: 0, left: 0, right: 0, zIndex: 1030 }}>
      <Row className="align-items-center justify-content-between">
        <Col xs="auto">
          <Link to="/">
            <Image src={logoImg} className="img-fluid" style={{ maxHeight: '40px' }} />
          </Link>
        </Col>
        <Col xs>
          <Form className="d-flex justify-content-center" role="search" onSubmit={(e) => e.preventDefault()}>
            <Form.Control type="search" placeholder="Search" aria-label="Search" className="me-2" />
            <Button variant="outline-dark" type="submit" style={{ backgroundColor: '#D9D9D9' }}>Search</Button>
          </Form>
        </Col>
        <Col xs="auto" className="d-flex justify-content-end">
          <Link to="/cartpage">
            <Image src={cartImg} className="img-fluid cart-image" style={{ maxHeight: '40px', marginRight: '15px' }} />
          </Link>
          {userRole ? (
            <Link to={getProfileLink()}>
              <Image src={profileImg} className="img-fluid profile-image" style={{ maxHeight: '40px' }} />
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="outline-light">Login</Button>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;

