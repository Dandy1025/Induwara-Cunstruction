import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Form, Button } from 'react-bootstrap';
import Header from '../component/header';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import backgroundImage from '../assets/Construction.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Regex for password validation
  const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[\W_]).{8,}$/;

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the password is valid before sending to the server
    if (!passwordValidationRegex.test(password)) {
      alert('Password does not meet the requirements.');
      return;
    }
    // Send the email and password to the server
    // For example, using fetch or axios to POST to your PHP script
  };

  return (
    <>
      <Header />
      <Navbar />
      <div style={{ position: 'relative' }}>
        <Image src={backgroundImage} fluid style={{ width: '100%', height: '613px' }} />
        <Container style={{
          fontFamily: 'poppins',
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '320px',
          backgroundColor: 'rgba(128, 128, 128, 0.9)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <Form onSubmit={handleSubmit}>
            <h2 style={{ color: 'white' }}><b>Login</b></h2><br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </Form.Group>

            <p style={{ color: 'white' }}>Forgot your Password? click <a href='' style={{ color: 'white', textDecoration: 'none' }}>here.</a></p>

            <Button variant="primary" type="submit" style={{ width: '90px' }}>
              <b>Login</b>
            </Button><br /><br />
            <Link to={'/accountSelect'} style={{ color: 'white', textDecoration: 'none' }}>
              <p>New to the site? Sign Up</p>
            </Link>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
}
