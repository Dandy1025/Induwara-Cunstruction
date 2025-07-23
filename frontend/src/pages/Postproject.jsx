import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import axios from 'axios';

function Postproject() {
  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    start_date: '',
    end_date: '',
    budget: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post('http://localhost:3000/api/projects', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setSuccess('Project posted successfully!');
      setFormData({
        project_name: '',
        description: '',
        start_date: '',
        end_date: '',
        budget: ''
      });

      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Error posting project:', error);
      if (error.response?.status === 401) {
        navigate('/login');
      } else {
        setError(error.response?.data?.error || 'Failed to post project');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <Container className="my-5">
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '30px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: '#f8f9fa',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 className="text-center mb-4" style={{ color: '#FF7D29' }}>
            Post New Project
          </h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label><strong>Project Name</strong></Form.Label>
              <Form.Control
                type="text"
                name="project_name"
                value={formData.project_name}
                onChange={handleChange}
                placeholder="Enter project name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label><strong>Description</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="House/new building/renovation/location details..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label><strong>Start Date</strong></Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label><strong>End Date</strong></Form.Label>
              <Form.Control
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label><strong>Budget (Optional)</strong></Form.Label>
              <Form.Control
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter estimated budget in LKR"
                min="0"
                step="0.01"
              />
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Button 
                variant="success" 
                type="submit" 
                disabled={loading}
                style={{ width: '45%' }}
              >
                {loading ? 'Posting...' : 'Post Project'}
              </Button>
              <Button 
                variant="danger" 
                type="button" 
                onClick={handleCancel}
                style={{ width: '45%' }}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Postproject;