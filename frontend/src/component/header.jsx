import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import logoImg from '../assets/logo.png';
import cartImg from '../assets/cartimg.png';
import profileImg from '../assets/Profile.png';
import '../style/headerstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Container fluid className="bg-secondary py-2" style={{ top: 0, left: 0, right: 0, zIndex: 1030}}>
      <Row className="align-items-center justify-content-between">
        <Col xs="auto">
          <Image src={logoImg} className="img-fluid" style={{ maxHeight: '40px' }} />
        </Col>
        <Col xs>
          <Form className="d-flex justify-content-center" role="search">
            <Form.Control type="search" placeholder="Search" aria-label="Search" className="me-2" />
            <Button variant="outline-dark" type="submit"  style={{backgroundColor:'#D9D9D9'}}>Search</Button>
          </Form>
        </Col>
        <Col xs="auto" className="d-flex justify-content-end">
          <Image src={cartImg} className="img-fluid" style={{ maxHeight: '40px', marginRight: '15px' }} />
          <Image src={profileImg} className="img-fluid" style={{ maxHeight: '40px' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
