import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../style/contentstyle.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Content() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load cart items from localStorage
        const loadCartItems = () => {
            try {
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                setItems(cartItems);
            } catch (error) {
                console.error('Error loading cart items:', error);
                setError('Failed to load cart items');
            } finally {
                setLoading(false);
            }
        };

        loadCartItems();
    }, []);

    const updateTotal = (item) => {
        const price = parseFloat(item.price.toString().replace('Rs ', '').replace(',', ''));
        return `Rs.${(price * item.quantity).toFixed(2)}`;
    };

    const handleIncrease = (id) => {
        const updatedItems = items.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1, total: updateTotal({ ...item, quantity: item.quantity + 1 }) }
                : item
        );
        setItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleDecrease = (id) => {
        const updatedItems = items.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1, total: updateTotal({ ...item, quantity: item.quantity - 1 }) }
                : item
        );
        setItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleRemoveItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const calculateGrandTotal = () => {
        return items.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.toString().replace('Rs ', '').replace(',', ''));
            return total + (itemPrice * item.quantity);
        }, 0).toFixed(2);
    };

    const formatPrice = (price) => {
        if (typeof price === 'string' && price.startsWith('Rs')) {
            return price;
        }
        return `Rs.${parseFloat(price).toFixed(2)}`;
    };

    if (loading) {
        return (
            <div className='background d-flex justify-content-center align-items-center' style={{ minHeight: '50vh' }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='background'>
                <Container>
                    <Alert variant="danger" className="text-center">
                        {error}
                    </Alert>
                </Container>
            </div>
        );
    }

    return (
        <div className='background'>
            <Container fluid style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
                <Row className="text-center">
                    <Col>
                        <label className="fw-bold text-decoration-underline display-6">
                            Your cart ({items.length}) Items
                        </label>
                    </Col>
                </Row>
                <br />

                {items.length === 0 ? (
                    <Row className="text-center">
                        <Col>
                            <Alert variant="info">
                                <h4>Your cart is empty</h4>
                                <p>Browse our inventory to add items to your cart.</p>
                                <Link to="/inventory">
                                    <Button variant="primary">Go to Inventory</Button>
                                </Link>
                            </Alert>
                        </Col>
                    </Row>
                ) : (
                    <>
                        <Row className="d-none d-md-flex">
                            <Col><label className="item-label">Item</label></Col>
                            <Col><label className="item-label">Price</label></Col>
                            <Col><label className="item-label text-center">Quantity</label></Col>
                            <Col><label className="item-label">Total</label></Col>
                            <Col><label className="item-label">Action</label></Col>
                        </Row>
                        <br />
                        <hr className="hr-line" />
                        <br />

                        {items.map(item => (
                            <div key={item.id}>
                                <Row className="align-items-center">
                                    <Col xs={12} md={3} className="text-center text-md-left">
                                        <br />
                                        <Image 
                                            src={`http://localhost:3000/images/${item.image}`} 
                                            alt={item.name}
                                            rounded 
                                            className="item-image"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                                            }}
                                        />
                                        <br />
                                        <div className="mt-2"><strong>{item.name}</strong></div>
                                    </Col>
                                    <Col xs={6} md={2} className="text-center text-md-left">
                                        <label className="item-label">{formatPrice(item.price)}</label>
                                    </Col>
                                    <Col xs={6} md={3} className="text-center">
                                        <div className="quantity-control d-flex justify-content-center align-items-center">
                                            <Button
                                                className="quantity-button"
                                                onClick={() => handleDecrease(item.id)}
                                                disabled={item.quantity <= 1}
                                                size="sm"
                                            >
                                                -
                                            </Button>
                                            <span className="quantity-display mx-3 fw-bold">{item.quantity}</span>
                                            <Button
                                                className="quantity-button"
                                                onClick={() => handleIncrease(item.id)}
                                                size="sm"
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={2} className="text-center text-md-left">
                                        <label className="item-label fw-bold">
                                            Rs.{(parseFloat(item.price.toString().replace('Rs ', '').replace(',', '')) * item.quantity).toFixed(2)}
                                        </label>
                                    </Col>
                                    <Col xs={6} md={2} className="text-center">
                                        <IconButton
                                            onClick={() => handleRemoveItem(item.id)}
                                            color="error"
                                            title="Remove item"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Col>
                                </Row>
                                <br />
                                <hr className="hr-line" />
                                <br />
                            </div>
                        ))}

                        <Row className="mt-4">
                            <Col lg={8} className="text-end">
                                <h3>Grand Total:</h3>
                            </Col>
                            <Col lg={4} className="text-center">
                                <h3 className="grand-total fw-bold" style={{ color: '#FF7D29' }}>
                                    Rs.{calculateGrandTotal()}
                                </h3>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mt-4 mb-4">
                            <Col xs="auto">
                                <Link to="/paymentmethod">
                                    <Button 
                                        variant="success" 
                                        size="lg"
                                        style={{
                                            backgroundColor: '#FF7D29',
                                            borderColor: '#FF7D29',
                                            fontWeight: 'bold',
                                            padding: '12px 30px'
                                        }}
                                    >
                                        Proceed to Checkout
                                    </Button>
                                </Link>
                            </Col>
                            <Col xs="auto">
                                <Link to="/inventory">
                                    <Button 
                                        variant="outline-primary" 
                                        size="lg"
                                        style={{
                                            borderColor: '#FF7D29',
                                            color: '#FF7D29',
                                            fontWeight: 'bold',
                                            padding: '12px 30px'
                                        }}
                                    >
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Content;