import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form, Modal } from 'react-bootstrap';
import Footer from '../component/footer';
import Header from '../component/header';
import Navbar from '../component/navbar';
import backgroundImage from '../assets/Construction.jpg';
import profileImage from '../assets/Profile.png';

export default function EmployeeProfilepage() {
  // Initial profile data
  const initialProfileData = {
    fullName: "John Doe",
    nic: "123456789V",
    email: "john.doe@example.com",
    contactNumber: "0771234567",
    address: "123, Main Street, City",
    username: "johndoe",
    profession: "Only for Employees",
    experience: "Only for Employees",
    storeBrand: "N/A",
    businessLicenseNumber: "N/A",
  };

  // State to hold profile data
  const [profileData, setProfileData] = useState(initialProfileData);

  // State to track if a field is editable
  const [editableField, setEditableField] = useState(null);

  // State for modal visibility, field to remove, and modal message
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalAction, setModalAction] = useState(null);

  // Handle input change
  const handleChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value,
    });
  };

  // Handle edit button click
  const handleEdit = (field) => {
    setEditableField(field);
  };

  // Handle remove button click
  const handleRemove = (field) => {
    setModalMessage("Are you sure you want to remove this field?");
    setModalAction(() => () => {
      handleChange(field, "");
      setShowModal(false);
    });
    setShowModal(true);
  };

  // Handle update profile
  const handleUpdateProfile = () => {
    setModalMessage("Save changes to your profile?");
    setModalAction(() => () => {
      alert("Profile updated successfully!");
      setShowModal(false);
    });
    setShowModal(true);
  };

  // Handle reset changes
  const handleResetChanges = () => {
    setModalMessage("Undo changes? and reset");
    setModalAction(() => () => {
      setProfileData(initialProfileData);
      setShowModal(false);
    });
    setShowModal(true);
  };

  // Handle delete account
  const handleDeleteAccount = () => {
    setModalMessage("Remove the account from the site permanently?");
    setModalAction(() => () => {
      alert("Account deleted successfully!");
      setShowModal(false);
    });
    setShowModal(true);
  };

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
              {['fullName', 'nic', 'email', 'contactNumber', 'address', 'username', 'profession', 'experience', 'storeBrand', 'businessLicenseNumber'].map((field) => (
                <Form.Group key={field} controlId={`form${field}`} className="mb-3">
                  <Row className="align-items-center">
                    <Col xs={6} className="d-flex align-items-center">
                      <Form.Label className="me-2" style={{ width: '40%' }}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Form.Label>
                      <Form.Control
                        type="text"
                        value={profileData[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                        readOnly={editableField !== field && (field === 'storeBrand' || field === 'businessLicenseNumber')}
                        style={{ maxWidth: '60%', flex: '1' }}
                      />
                    </Col>
                    {field !== 'storeBrand' && field !== 'businessLicenseNumber' && (
                      <Col xs={6} className="d-flex justify-content-end">
                        <Button variant="primary" className="me-2" onClick={() => handleEdit(field)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleRemove(field)}>Remove</Button>
                      </Col>
                    )}
                  </Row>
                </Form.Group>
              ))}
              <div className="d-flex justify-content-between mt-4">
                <Button variant="success" onClick={handleUpdateProfile}>Update Profile</Button>
                <Button variant="warning" onClick={handleResetChanges}>Reset Changes</Button>
                <Button variant="danger" onClick={handleDeleteAccount}>Delete Account</Button>
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
          <Button variant="danger" onClick={modalAction}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
