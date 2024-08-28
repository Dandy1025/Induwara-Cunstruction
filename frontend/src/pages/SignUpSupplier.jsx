import React, { useState } from 'react';
import { Image, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import backgroundImage from '../assets/Construction.jpg';
import '../style/SignUpSupplier.css';

export default function SignUpSupplier() {
  const [fullName, setFullName] = useState('');
  const [nic, setNic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [storeBrand, setStoreBrand] = useState('');
  const [businessLicenseNumber, setBusinessLicenseNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{3,})(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert('Password does not meet the requirements.');
      return;
    }

    const data = {
      userType: 'supplier',
      fullName,
      nic,
      username,
      email,
      password,
      contactNumber,
      address,
      storeBrand,
      businessLicenseNumber
    };

    fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        alert('Registration failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const formatName = (name) => {
    return name.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setFullName(formatName(value));
    }
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z0-9\s.,/"']*$/i.test(value)) {
      setAddress(value);
    }
  };

  const handleNicChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]{0,9}$/.test(value)) {
      setNic(value);
    } else if (/^[0-9]{9}[Vv]$/.test(value) && value.length === 10) {
      setNic(value.toUpperCase());
    } else if (/^[0-9]{10}[0-9]{0,2}$/.test(value) && value.length <= 12) {
      setNic(value);
    }
  };

  const handleContactNumberChange = (e) => {
    const value = e.target.value;
    if (/^0[0-9]*$/.test(value)) {
      setContactNumber(value);
    }
  };

  const handleStoreBrandChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setStoreBrand(formatName(value));
    }
  };

  const handleBusinessLicenseNumberChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z0-9]*$/.test(value)) {
      setBusinessLicenseNumber(value);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', width: '100%' }}>
        <Image src={backgroundImage} fluid style={{ width: '100%', height: 'auto' }} />
        <Container fluid style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Row className="justify-content-center w-100">
            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-3">
              <Container className="guideline-container" style={{ fontFamily: 'poppins', backgroundColor: 'rgba(128, 128, 128, 0.9)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', maxHeight: '65vh', overflowY: 'scroll' }}>
                <h3 style={{ color: 'orange' }}>Guidelines for SignUp</h3>
                <br />
                <div style={{ color: 'white' }}>
                  <ul>
                    <li>Full Name: letter only (first Character of every word must be Capital)</li><br />
                    <li>NIC: numeric characters only (for 12 character NICs), 9 numeric characters and V (end letter) only (for 10 character NICs)</li><br />
                    <li>Email: must be a valid email address.</li><br />
                    <li>Password: must contain at least 8 characters (Uppercase letter, lowercase letter, 3 numerical characters and a special character / first character should be an Uppercase letter)</li><br />
                    <li>Contact number: numerics only (maximum characters 10 / start with "0")</li><br />
                    <li>Physical address: letters and Numbers with special characters ( . , "" / ) only</li><br />
                    <li>Store Brand: letters only (first letter of every word must be Capital)</li><br />
                    <li>Business License Number: uppercase letters and numerical characters only</li>
                  </ul>
                </div>
              </Container>
            </Col>

            <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-3">
              <Container className="signup-form-container" style={{ fontFamily: 'poppins', backgroundColor: 'rgba(128, 128, 128, 0.9)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', maxHeight: '65vh', overflowY: 'scroll' }}>
                <Form onSubmit={handleSubmit}>
                  <h3 style={{ color: 'white', textAlign: 'center', backgroundColor: 'orange', borderRadius: '8px' }}>Sign Up</h3>
                  <br />
                  <h5 style={{ color: 'white' }}>Read the SignUp guideline to avoid inconvenience.</h5>
                  <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Control type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicNic">
                    <Form.Control type="text" placeholder="NIC" value={nic} onChange={handleNicChange} maxLength="12" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control type="text" pattern="[A-Za-z0-9_]+" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicContactNumber">
                    <Form.Control type="tel" placeholder="Contact Number" value={contactNumber} onChange={handleContactNumberChange} maxLength="10" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Control as="textarea" rows={3} placeholder="Physical Address" value={address} onChange={handleAddressChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicStoreBrand">
                    <Form.Control type="text" placeholder="Store Brand" value={storeBrand} onChange={handleStoreBrandChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicBusinessLicenseNumber">
                    <Form.Control type="text" placeholder="Business License Number" value={businessLicenseNumber} onChange={handleBusinessLicenseNumberChange} required />
                  </Form.Group>

                  <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: 'orange' }}>
                    Sign Up
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
