import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from 'react-rating-stars-component';
import { Modal, Button } from 'react-bootstrap';
import { FaTrashAlt, FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  useEffect(() => {
    const initialReviews = [
      { id: 1, rating: 5, feedback: 'Great service!' },
      { id: 2, rating: 4, feedback: 'Good quality materials.' },
      { id: 3, rating: 3, feedback: 'Average experience.' },
    ];
    setReviews(initialReviews);
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { id: uuidv4(), rating, feedback };
    setReviews([newReview, ...reviews]);
    setRating(0);
    setFeedback('');
  };

  const handleDelete = (review) => {
    setReviewToDelete(review);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setReviews(reviews.filter(review => review.id !== reviewToDelete.id));
    setShowModal(false);
    setReviewToDelete(null);
  };

  const containerStyle = {
    marginTop: '60px',
    padding: '20px',
    backgroundColor: '#e0f7fa',
  };

  const formStyle = {
    margin: '30px 0',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const reviewStyle = {
    marginBottom: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const btnStyle = {
    marginLeft: '10px',
    fontSize: '0.8rem',
    padding: '0.5rem 1rem',
  };

  const starIconStyle = {
    color: '#ffd700',
  };

  return (
    <div>
      
      <div className="container" style={containerStyle}>
        <h1 className="mt-4 text-center">Customer Reviews</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div className="mb-3" style={ratingStyle}>
            <label className="form-label me-3">Rating</label>
            <Rating
              count={5}
              size={24}
              value={rating}
              onChange={handleRatingChange}
              emptyIcon={<FaStar />}
              filledIcon={<FaStar style={starIconStyle} />}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">Feedback</label>
            <textarea
              className="form-control"
              id="feedback"
              rows="3"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit Review</button>
        </form>
        <div className="reviews-list">
          <h2 className="text-center">Submitted Reviews</h2>
          {reviews.map(review => (
            <div key={review.id} className="card" style={reviewStyle}>
              <div className="card-body d-flex align-items-center">
                <div style={{ flex: 1 }}>
                  <div style={ratingStyle}>
                    <Rating
                      count={5}
                      size={24}
                      value={review.rating}
                      edit={false}
                      emptyIcon={<FaStar />}
                      filledIcon={<FaStar style={starIconStyle} />}
                    />
                  </div>
                  <p className="card-text">{review.feedback}</p>
                </div>
                <Button variant="danger" onClick={() => handleDelete(review)} style={btnStyle}>
                  <FaTrashAlt />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this review?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Feedback;