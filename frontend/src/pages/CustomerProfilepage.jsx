import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Form, Modal, Alert } from 'react-bootstrap';
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
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:3000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('Profile data fetched:', response.data);
        setProfileData({
          fullName: response.data.fullname || '',
          nic: response.data.nic || '',
          email: response.data.useremail || '',
          contactNumber: response.data.contactnum || '',
          address: response.data.useraddress || '',
          username: response.data.username || ''
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          setError('Failed to fetch profile data.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [navigate]);

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
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:3000/api/profile', {
        fullname: profileData.fullName,
        contactnum: profileData.contactNumber,
        useraddress: profileData.address
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setSuccess("Profile updated successfully!");
      setEditableField(null);
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError("Failed to update profile.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleResetChanges = () => {
    setModalMessage("Undo changes?");
    setModalAction(() => () => {
      window.location.reload();
      setShowModal(false);
    });
    setShowModal(true);
  };

  const handleDeleteAccount = () => {
    setModalMessage("Remove the account from the site permanently?");
    setModalAction(() => () => {
      // Implement account deletion logic here
      alert("Account deletion feature will be implemented soon!");
      setShowModal(false);
    });
    setShowModal(true);
  };

  const handleLogout = () => {
    setModalMessage("Are you sure you want to logout?");
    setModalAction(() => () => {
      localStorage.removeItem('token');
      setShowModal(false);
      navigate('/');
    });
    setShowModal(true);
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error && !profileData) return (
    <div className="alert alert-danger text-center" role="alert">
      {error}
    </div>
  );

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
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Row>
              <Col xs={3}>
                <Image src={profileImage} roundedCircle style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
              </Col>
              <Col xs={9} className="d-flex align-items-center">
                <h2 style={{ color: 'orange' }}>Profile Information</h2>
              </Col>
            </Row>
            
            <Form>
              {profileData && Object.entries(profileData).map(([field, value]) => (
                <Form.Group key={field} controlId={`form${field}`} className="mb-3">
                  <Row className="align-items-center">
                    <Col xs={6} className="d-flex align-items-center">
                      <Form.Label className="me-2" style={{ width: '40%' }}>
                        {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                      </Form.Label>
                      <Form.Control
                        type={field === 'email' ? 'email' : 'text'}
                        value={value || ''}
                        onChange={(e) => handleChange(field, e.target.value)}
                        readOnly={editableField !== field || field === 'email' || field === 'nic' || field === 'username'}
                        style={{ maxWidth: '60%', flex: '1' }}
                      />
                    </Col>
                    {field !== 'email' && field !== 'nic' && field !== 'username' && (
                      <Col xs={6} className="d-flex justify-content-end">
                        <Button variant="primary" className="me-2" onClick={() => handleEdit(field)}>
                          Edit
                        </Button>
                        <Button variant="danger" onClick={() => handleRemove(field)}>
                          Remove
                        </Button>
                      </Col>
                    )}
                  </Row>
                </Form.Group>
              ))}
              
              <div className="d-flex justify-content-between mt-4">
                <Button variant="success" onClick={handleUpdateProfile}>
                  Update Profile
                </Button>
                <Button variant="warning" onClick={handleResetChanges}>
                  Reset Changes
                </Button>
                <Button variant="danger" onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
              </div>
              
              <div className="d-flex justify-content-center mt-4">
                <Button variant="info" onClick={handleLogout}>
                  Logout
                </Button>
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => {
            if (modalAction) {
              modalAction();
            }
          }}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}