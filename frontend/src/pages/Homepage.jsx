import React from 'react';
import Image from 'react-bootstrap/Image';
import a from '../assets/Construction.jpg';
import Footer from '../component/footer';
import '../style/Homestyle.css';
import Navbar from '../component/navbar';
import { Link, useNavigate } from 'react-router-dom';

const isLoggedIn = () => {
  return !!localStorage.getItem('token'); 
};

export default function Homepage() {
  const navigate = useNavigate();

  const handlePostProjectClick = () => {
    if (!isLoggedIn()) {
      alert('Please log in first to post a project.'); 
      navigate('/login'); 
    } else {
      navigate('/postproject');
    }
  };

  const handleGoToInventoryClick = () => {
    navigate('/inventory');
  };

  return (
    <>
      <Navbar />
      <Image src={a} fluid style={{ width: "1920px", height: "612px" }} />
      <div style={{ fontFamily: "poppins", textAlign: "center" }}>
        <fieldset className="fieldset-container">
          <h1 style={{ fontSize: "40px" }}><br />Welcome to Induwara<br />
            Constructions</h1>
          <br />
          <h3>Looking for a place to buy and hire<br />
            This is the place for you </h3>
          <br />
          <h2>Build your Dreams Here!</h2>
          <button
            type="button"
            className="button-hover-effect"
            style={{
              marginTop: "20px",
              fontSize: "20px",
              padding: "10px 20px",
              backgroundColor: 'rgba(255, 140, 0, 1)', 
              color: 'white',
              borderRadius: '8px',
              border: 'none' 
            }}
            onClick={handlePostProjectClick}
          >
            Post Project
          </button>
          <button
            type="button"
            className="button-hover-effect"
            style={{
              marginTop: "20px",
              fontSize: "20px",
              padding: "10px 20px",
              backgroundColor: 'rgba(0, 123, 255, 1)', // Blue color
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              marginLeft: "10px" // Add some space between buttons
            }}
            onClick={handleGoToInventoryClick}
          >
            Go to Inventory
          </button>
        </fieldset>
      </div>
      <Footer />
    </>
  );
}
