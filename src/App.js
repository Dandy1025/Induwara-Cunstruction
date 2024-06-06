import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar, Nav, Container, Row, Col, Button, Form } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import logo from './assets/logo.png'; // Correctly importing the logo image

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="contact-info">
              <span><i className="fas fa-phone"></i> 031 439 4537</span>
              <span><i className="fas fa-envelope"></i> info@induwaraconst.com</span>
            </div>
          </Col>
          <Col md={6} className="text-md-right">
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Google Plus"><i className="fab fa-google-plus"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

function Navigation() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" /> {/* Using the imported logo */}
          <div className="brand-name">
            <span className="induwara">Induwara</span>
            <span className="construction">Construction</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-item">HOME</Nav.Link>
            <Nav.Link href="#about" className="nav-item">SERVICES</Nav.Link>
            <Nav.Link href="#services" className="nav-item">PROJECTS</Nav.Link>
            <Nav.Link href="#gallery" className="nav-item">EMPLOYEES</Nav.Link>
            <Nav.Link href="#blog" className="nav-item">SUPPLIERS</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">ABOUT US</Nav.Link>
          </Nav>
          <Form className="d-flex search-form">
            <Button variant="outline-success" className="search-button" aria-label="Search"><i className="fas fa-search"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center">
            <h5>WELCOME TO OUR</h5>
            <h4>CLEAN, MODERN, MULTIPURPOSE THEME</h4>
            <p>
              OUR TEAM OF PROFESSIONALS WILL HELP YOU TURN YOUR DREAM HOME OR FLAT INTO A REALITY FAST. THE LOVE BOAT PROMISES SOMETHING FOR EVERYONE. NOW THE WORLD DOESN'T MOVE TO THE BEAT OF JUST ONE DRUM
            </p>
            <Button variant="warning" className="custom-button"><b>Read More</b></Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="text-center">
            <i className="fas fa-home"></i>
            <h5>Professional Build</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </Col>
          <Col md={3} className="text-center">
            <i className="fas fa-cogs"></i>
            <h5>We Deliver Quality</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </Col>
          <Col md={3} className="text-center">
            <i className="fas fa-clock"></i>
            <h5>Always On Time</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </Col>
          <Col md={3} className="text-center">
            <i className="fas fa-heart"></i>
            <h5>We Are Passionate</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
