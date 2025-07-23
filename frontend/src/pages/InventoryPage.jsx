import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

const InventoryPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/inventory');
                console.log('Inventory response:', response.data);
                
                if (Array.isArray(response.data)) {
                    setItems(response.data);
                } else {
                    setError('Unexpected data format');
                }
            } catch (error) {
                console.error('Error fetching inventory:', error);
                setError('Failed to fetch inventory items.');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const formatPrice = (price) => {
        return `Rs ${parseFloat(price).toFixed(2)}`;
    };

    const handleAddToCart = (item) => {
        try {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.total = `Rs.${(parseFloat(item.price) * existingItem.quantity).toFixed(2)}`;
            } else {
                const newItem = {
                    ...item,
                    quantity: 1,
                    total: `Rs.${parseFloat(item.price).toFixed(2)}`
                };
                cartItems.push(newItem);
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            setSuccess(`${item.name} added to cart!`);
            
            setTimeout(() => {
                setSuccess(null);
                navigate('/cartpage');
            }, 1500);

        } catch (error) {
            console.error('Error adding to cart:', error);
            setError('Failed to add item to cart');
            setTimeout(() => setError(null), 3000);
        }
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Container fluid style={{ padding: '20px', minHeight: '70vh' }}>
                {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                {success && <Alert variant="success" className="text-center">{success}</Alert>}
                
                <Row className="text-center mb-4">
                    <Col>
                        <h1 style={{ color: '#FF7D29', fontWeight: 'bold' }}>Construction Materials & Equipment</h1>
                        <p className="lead">Browse our wide selection of quality construction materials and tools</p>
                    </Col>
                </Row>

                {items.length === 0 ? (
                    <Row className="text-center">
                        <Col>
                            <Alert variant="info">
                                <h4>No items available</h4>
                                <p>Please check back later for new inventory items.</p>
                            </Alert>
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        {items.map(item => (
                            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <div style={{ 
                                    border: '1px solid #ddd', 
                                    borderRadius: '12px', 
                                    padding: '15px', 
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.2s',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                                        <Image 
                                            src={`http://localhost:3000/images/${item.image}`} 
                                            fluid 
                                            style={{ 
                                                maxHeight: '200px', 
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                marginBottom: '15px'
                                            }}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
                                            }}
                                        />
                                        <h5 style={{ 
                                            margin: '10px 0', 
                                            color: '#333',
                                            fontSize: '1.1rem',
                                            fontWeight: '600'
                                        }}>
                                            {item.name}
                                        </h5>
                                        
                                        {item.category && (
                                            <small className="text-muted mb-2 d-block">
                                                Category: {item.category}
                                            </small>
                                        )}
                                        
                                        {item.description && (
                                            <p style={{ 
                                                fontSize: '0.9rem', 
                                                color: '#666',
                                                marginBottom: '10px',
                                                flex: '1'
                                            }}>
                                                {item.description.length > 100 
                                                    ? `${item.description.substring(0, 100)}...` 
                                                    : item.description
                                                }
                                            </p>
                                        )}
                                        
                                        <div style={{ marginTop: 'auto' }}>
                                            <p style={{ 
                                                fontSize: '1.2rem', 
                                                fontWeight: 'bold', 
                                                color: '#FF7D29',
                                                margin: '10px 0'
                                            }}>
                                                {formatPrice(item.price)}
                                            </p>
                                            
                                            {item.stock_quantity && (
                                                <small className="text-success mb-2 d-block">
                                                    In Stock: {item.stock_quantity} units
                                                </small>
                                            )}
                                            
                                            <Button 
                                                variant="primary" 
                                                onClick={() => handleAddToCart(item)}
                                                style={{
                                                    backgroundColor: '#FF7D29',
                                                    borderColor: '#FF7D29',
                                                    width: '100%',
                                                    fontWeight: '600'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#e66a1f';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = '#FF7D29';
                                                }}
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <Footer />
        </>
    );
};

export default InventoryPage;