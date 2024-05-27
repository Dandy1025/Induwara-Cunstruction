import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import '../style/contentstyle.css';
import DrillImg from '../assets/Drill.jpg';
import JackhammerImg from '../assets/Jackhammer.jpg';
import CementImg from '../assets/Cement.png';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const initialItems = [
    { id: 1, image: DrillImg, price: 'Rs.1500.00', quantity: 1, total: 'Rs.1500.00' },
    { id: 2, image: JackhammerImg, price: 'Rs.2000.00', quantity: 1, total: 'Rs.2000.00' },
    { id: 3, image: CementImg, price: 'Rs.2200.00', quantity: 1, total: 'Rs.2200.00' },
];

function Content() {
    const [items, setItems] = useState(initialItems);

    const updateTotal = (item) => {
        const price = parseFloat(item.price.replace('Rs.', '').replace(',', ''));
        return `Rs.${(price * item.quantity).toFixed(2)}`;
    };

    const handleIncrease = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1, total: updateTotal({ ...item, quantity: item.quantity + 1 }) }
                    : item
            )
        );
    };

    const handleDecrease = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1, total: updateTotal({ ...item, quantity: item.quantity - 1 }) }
                    : item
            )
        );
    };

    const calculateGrandTotal = () => {
        return items.reduce((total, item) => {
            return total + parseFloat(item.total.replace('Rs.', '').replace(',', ''));
        }, 0).toFixed(2);
    };

    return (
        <div className='background'>
            <Container style={{ maxWidth: '100%', position: 'relative', zIndex: 1 }}>
                <Row>
                    <Col className="text-center">
                        <label className="fw-bold text-decoration-underline display-6">Your cart ({items.length}) Items</label>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col><label className="item-label">Item</label></Col>
                    <Col><label className="item-label">Price</label></Col>
                    <Col><label className="item-label">Quantity</label></Col>
                    <Col><label className="item-label">Total</label></Col>
                </Row>
                <br />
                <hr className="hr-line" />
                {items.map(item => (
                    <div key={item.id}>
                        <Row>
                            <Col><Image src={item.image} alt="ItemImg" rounded className="item-image" /></Col>
                            <Col><label className="item-label">{item.price}</label></Col>
                            <Col>
                                <div className="quantity-control">
                                    <Button
                                        className="quantity-button"
                                        onClick={() => handleDecrease(item.id)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </Button>
                                    <span className="quantity-display">{item.quantity}</span>
                                    <Button
                                        className="quantity-button"
                                        onClick={() => handleIncrease(item.id)}
                                    >
                                        +
                                    </Button>
                                </div>
                            </Col>
                            <Col><label className="item-label">{item.total}</label>

                                <IconButton
                                    style={{ marginLeft: "30px", height: "25px", width: "30px" }}
                                    color="error"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Col>
                        </Row>
                        <br />
                        <hr className="hr-line" />
                    </div>
                ))}
                <Row>
                    <Col lg={8}>
                        <h3 style={{ marginLeft: "100px", textAlign: 'end' }}>Grand Total : </h3>
                    </Col>
                    <Col>
                        <h3 className='grand-total' style={{ marginLeft: "150px" }}>
                            Rs.{calculateGrandTotal()}
                        </h3>
                    </Col>
                </Row>
                <Row style={{ marginLeft: "950px", marginTop: "10px" }}>
                    <div className='checkoutbtn'>
                        <Link to="/paymentmethod">
                            <Button style={{ width: "200px" }} variant="danger" size="lg">
                                Checkout
                            </Button>{' '}
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Content;
