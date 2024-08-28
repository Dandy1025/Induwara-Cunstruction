import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Updated to use `useNavigate` for navigation
import axios from 'axios';
import Navbar from '../component/navbar';

const InventoryPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/inventory');
                console.log(response.data); // Log the response data for inspection
                if (Array.isArray(response.data)) {
                    setItems(response.data);
                } else {
                    setError('Unexpected data format');
                }
            } catch (error) {
                setError('Failed to fetch inventory items.');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Function to format price
    const formatPrice = (price) => {
        return `Rs ${price.toFixed(2)}`; // Format the price with "Rs" and two decimal places
    };

    const handleAddToCart = (item) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.total = `Rs.${(parseFloat(existingItem.price.replace('Rs ', '').replace(',', '')) * existingItem.quantity).toFixed(2)}`;
        } else {
            item.quantity = 1;
            item.total = item.price;
            cartItems.push(item);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        console.log('Cart items after adding:', cartItems);

        navigate('/cartpage'); // Redirect to the cart page using navigate
    };

    return (
        <>
            <Navbar />
            <Container fluid style={{ padding: '20px' }}>
                <Row className="text-center">
                    <Col>
                        <h1>Inventory Page</h1>
                    </Col>
                </Row>
                <Row>
                    {items.map(item => (
                        <Col key={item.id} xs={12} md={4} lg={3} className="mb-4">
                            <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                                <Image src={`http://localhost:3000/images/${item.image}`} fluid style={{ maxHeight: '200px', objectFit: 'cover' }} />
                                <h5 style={{ margin: '10px 0' }}>{item.name}</h5>
                                <p>{formatPrice(item.price)}</p>
                                <Button variant="primary" onClick={() => handleAddToCart(item)}>
                                    Add to Cart
                                </Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default InventoryPage;
