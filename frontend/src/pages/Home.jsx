import React from 'react';
import Image from 'react-bootstrap/Image';
import a from '../assets/Construction.jpg';
import Footer from '../component/footer';
import '../style/Homestyle.css';
import Header from '../component/header';
import Navbar from '../component/navbar';

export default function Home() {
  return (
    <>
      <div><Header/></div>
      <div><Navbar/></div>
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
          {/* Button with full opacity */}
          <button type="button" className="button-hover-effect" style={{ 
            marginTop: "20px", 
            fontSize: "20px", 
            padding: "10px 20px",
            backgroundColor: 'rgba(255, 140, 0, 1)', // RGBA color for full opacity
            color: 'white', 
            borderRadius: '8px',
            border: 'none' // Remove default button border
          }}>
            Get Started
          </button>
        </fieldset>
      </div>
      <div><Footer/></div>
    </>
  );
}
