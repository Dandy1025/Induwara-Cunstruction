import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import logoImg from '../assets/logo-color.png';
import cartImg from '../assets/cartimg.png';
import profileImg from '../assets/552721.png';
import '../style/headerstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Header = () => {
  return (
    <Container style={{ maxWidth: "100%", backgroundColor:"#D9D9D9" }}>
      <Row>
        <Col xs={6} md={6} lg={2}>
          <Image style={{ height: 40, marginTop: 5, marginBottom: 5 }} src={logoImg} />
        </Col>
        <Col xs={6} md={4} lg={6}>
          <form style={{ width: 700, marginTop: 5, marginBottom: 5, marginRight: 200 }} className="d-flex justify-content-lg-start" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Image className="cart-image" style={{ height: 40, marginLeft: 380, marginTop: 5, marginBottom: 5 }} src={cartImg} thumbnail />
        </Col>
        <Col>
          <Image className="profile-image" style={{ height: 40, marginLeft: 70, marginTop: 5, marginBottom: 5 }} src={profileImg} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;