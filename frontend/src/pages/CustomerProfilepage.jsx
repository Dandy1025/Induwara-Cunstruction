import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Form, Modal } from 'react-bootstrap';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import backgroundImage from '../assets/Construction.jpg';
import profileImage from '../assets/Profile.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CustomerProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [editableField, setEditableField] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalAction, setModalAction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('http://localhost:3000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('Profile data fetched:', response.data);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value,
    });
  };

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleRemove = (field) => {
    setModalMessage(`Are you sure you want to remove this ${field}?`);
    setModalAction(() => () => {
      handleChange(field, "");
      setShowModal(false);
    });
    setShowModal(true);
  };

  const handleUpdateProfile = async () => {
    setModalMessage("Save changes to your profile?");
    setModalAction(async () => {
      try {
        await axios.put('/api/profile', profileData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        alert("Profile updated successfully!");
        setShowModal(false);
      } catch (error) {
        alert("Failed to update profile.");
      }
    });
    setShowModal(true);
  };

  const handleResetChanges = () => {
    setModalMessage("Undo changes?");
    setModalAction(() => () => {
      setProfileData(profileData);
      setShowModal(false);
    });
    setShowModal(true);
  };

  const handleDeleteAccount = () => {
    setModalMessage("Remove the account from the site permanently?");
    setModalAction(() => () => {
      alert("Account deleted successfully!");
      setShowModal(false);
      navigate('/');
    });
    setShowModal(true);
  };

  const handleLogout = () => {
    setModalMessage("Are you sure you want to logout?");
    setModalAction(() => () => {
      localStorage.removeItem('token');
      alert("Logged out successfully!");
      setShowModal(false);
      window.location.replace('/');
    });
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', width: '100%' }}>
        <Image src={backgroundImage} fluid style={{ width: '100%', height: 'auto' }} />
        <Container fluid style={{
          position: 'absolute',
          top: '15%',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '20px',
          overflowY: 'auto',
          maxHeight: '75vh'
        }}>
          <Container style={{
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '800px',
            overflowY: 'auto'
          }}>
            <Row>
              <Col xs={3}>
                <Image src={profileImage} roundedCircle style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
              </Col>
              <Col xs={9} className="d-flex align-items-center">
                <h2 style={{ color: 'orange' }}>Profile Information</h2>
              </Col>
            </Row>
            <Form>
              {['fullName', 'nic', 'email', 'contactNumber', 'address', 'username'].map((field) => (
                <Form.Group key={field} controlId={`form${field}`} className="mb-3">
                  <Row className="align-items-center">
                    <Col xs={6} className="d-flex align-items-center">
                      <Form.Label className="me-2" style={{ width: '40%' }}>
                        {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={profileData[field] || ''}
                        onChange={(e) => handleChange(field, e.target.value)}
                        readOnly={editableField !== field}
                        style={{ maxWidth: '60%', flex: '1' }}
                      />
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end">
                      <Button variant="primary" className="me-2" onClick={() => handleEdit(field)}>Edit</Button>
                      <Button variant="danger" onClick={() => handleRemove(field)}>Remove</Button>
                    </Col>
                  </Row>
                </Form.Group>
              ))}
              <div className="d-flex justify-content-between mt-4">
                <Button variant="success" onClick={handleUpdateProfile}>Update Profile</Button>
                <Button variant="warning" onClick={handleResetChanges}>Reset Changes</Button>
                <Button variant="danger" onClick={handleDeleteAccount}>Delete Account</Button>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="info" onClick={handleLogout}>Logout</Button>
              </div>
            </Form>
          </Container>
        </Container>
      </div>
      <Footer />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => {
            if (modalAction) {
              modalAction();
            }
          }}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
