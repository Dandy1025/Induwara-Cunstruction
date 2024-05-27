import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/paymentContent.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function PaymentContent() {
  return (
    <div className="bg d-flex justify-content-center align-items-center">
      <div className="paymentBg d-flex justify-content-center ">
        <Container maxWidth="100%">
          <Row className="mb-4 text-center">
            <label className="display-6 fw-bold">Enter Your Payment Details</label>
          </Row>
          <Row className="mb-3">
            <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "750px" }}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Card Number :
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="input-width1"
              />
            </InputGroup>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={6} className="mb-3">
              <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "250px" }}>
                <InputGroup.Text id="inputGroup-sizing-default">
                  MM/YY :
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="input-width"
                />
              </InputGroup>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "250px" }}>
                <InputGroup.Text id="inputGroup-sizing-default">
                  CVC :
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  className="input-width"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mb-3">
            <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "750px" }}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Name :
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="input-width1"
              />
            </InputGroup>
          </Row>
          <Row className="mb-3">
            <InputGroup className="mb-3 mx-auto" style={{ maxWidth: "750px" }}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Address :
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="input-width1"
              />
            </InputGroup>
          </Row>
          <Row className="justify-content-center">
            <Button className='paybtn' style={{ width: "200px" }} variant="success">Pay Now</Button>{' '}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PaymentContent;
