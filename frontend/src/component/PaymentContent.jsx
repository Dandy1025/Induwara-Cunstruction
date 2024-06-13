import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import "../style/paymentContent.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function PaymentContent() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: '',
    address: '',
    saveCard: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    if (!formData.expiry || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      errors.expiry = 'Expiry date must be in MM/YY format';
    }

    if (!formData.cvc || !/^\d{3,4}$/.test(formData.cvc)) {
      errors.cvc = 'CVC must be 3 or 4 digits';
    }

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.address) {
      errors.address = 'Address is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="bg d-flex justify-content-center align-items-center">
      <div className="paymentBg d-flex justify-content-center">
        <Container maxWidth="100%">
          <form onSubmit={handleSubmit}>
            <Row className="mb-4 text-center">
              <label className="display-6 fw-bold">Enter Your Payment Details</label>
            </Row>
            <Row className="mb-3">
              <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "750px" }}>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Card Number :
                </InputGroup.Text>
                <Form.Control
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="input-width1"
                  isInvalid={!!errors.cardNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cardNumber}
                </Form.Control.Feedback>
              </InputGroup>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} className="mb-3">
                <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "250px" }}>
                  <InputGroup.Text id="inputGroup-sizing-default">
                    MM/YY :
                  </InputGroup.Text>
                  <Form.Control
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    className="input-width"
                    isInvalid={!!errors.expiry}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.expiry}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "250px" }}>
                  <InputGroup.Text id="inputGroup-sizing-default">
                    CVC :
                  </InputGroup.Text>
                  <Form.Control
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    className="input-width"
                    isInvalid={!!errors.cvc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cvc}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "750px" }}>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Name :
                </InputGroup.Text>
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="input-width1"
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </InputGroup>
            </Row>
            <Row className="mb-3">
              <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "750px" }}>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Address :
                </InputGroup.Text>
                <Form.Control
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="input-width1"
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </InputGroup>
            </Row>
            <Row className="mb-3 justify-content-start" style={{ marginLeft: '90px' }}>
              <Form.Group className="d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  label="Save card details"
                  name="saveCard"
                  checked={formData.saveCard}
                  onChange={handleChange}
                  className="text-center"
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-center">
              <Button type="submit" className="paybtn" style={{ width: "200px" }} variant="success">
                Pay Now
              </Button>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default PaymentContent;
