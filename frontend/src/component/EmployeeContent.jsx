import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Pic3Img from '../assets/pic3.jpg';
import Pic7Img from '../assets/pic7.jpg';
import Pic8Img from '../assets/pic8.jpg';
import Pic6Img from '../assets/pic6.jpg';

import { Dropdown, ButtonGroup, Modal, Button } from 'react-bootstrap';

function Employee() {
  const [showModal, setShowModal] = useState(false);
  const [activeWorker, setActiveWorker] = useState({});

  const workers = [
    {
      name: "MR. Rupasinghe",
      position: "CEO & Founder",
      img: Pic8Img,
      location: "Colombo",
      bio: "MR. Rupasinghe is a visionary leader with over 11 years of experience in the industry. His dedication and innovative approach have driven the company to new heights.",
      experience: "11+ years",
    },
    {
      name: "MR. Nuwan",
      position: "Civil Engineer",
      img: Pic7Img,
      location: "Gampaha",
      bio: "MR. Nuwan is an expert civil engineer known for his exceptional project management skills and attention to detail. He has successfully completed numerous large-scale projects.",
      experience: "15 years",
    },
    {
      name: "MRS. Kulathunga",
      position: "Interior Designer",
      img: Pic6Img,
      location: "Nuwara",
      bio: "MRS. Kulathunga is a talented interior designer who brings a unique artistic touch to every project. Her designs are both functional and aesthetically pleasing.",
      experience: "10 years",
    },
    {
      name: "MR. Dilan",
      position: "Painter",
      img: Pic3Img,
      location: "Rathnapura",
      bio: "MR. Dilan is a skilled painter known for his precision and creativity. He has worked on a variety of projects, delivering outstanding results every time.",
      experience: "8 years",
    },
  ];

  const handleShowModal = (worker) => {
    setActiveWorker(worker);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'calc(100vh - 120px)',
    marginTop: '60px',
    marginBottom: '60px',
    backgroundColor: '#f4f4f4',
  };

  const headingStyle = {
    marginBottom: '30px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
  };

  const spanStyle = {
    color: '#DAA520',
  };

  const workerNameStyle = {
    margin: '20px 0 5px 0',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#00796b',
  };

  const workerPositionStyle = {
    margin: '0',
    fontSize: '18px',
    color: '#555',
  };

  const carouselStyle = {
    maxWidth: '600px',
    width: '100%',
  };

  const imgStyle = {
    height: '300px',
    objectFit: 'cover',
    position: 'relative',
  };

  const kebabMenuStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  const modalImgStyle = {
    maxWidth: '100%',
    height: 'auto',
    width: '200px', 
    margin: '0 auto 20px auto',
    display: 'block',
  };

  return (
    <div>
      
      <div style={containerStyle}>
        <h1 style={headingStyle}>WE ARE <span style={spanStyle}>PROFESSIONAL & EXPERT</span> WORKERS</h1>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
          <div className="carousel-inner">
            {workers.map((worker, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={worker.name}>
                <div style={{ position: 'relative' }}>
                  <img src={worker.img} className="d-block w-100" alt={worker.name} style={imgStyle} />
                  <Dropdown as={ButtonGroup} style={kebabMenuStyle}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="btn-sm">
                      <span className="bi bi-three-dots-vertical"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleShowModal(worker)}>View Details</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <h3 style={workerNameStyle}>{worker.name}</h3>
                <p style={workerPositionStyle}>{worker.position}</p>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{height:"60px", marginTop:"100px"}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{height:"60px", marginTop:"100px"}} >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>{activeWorker.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={activeWorker.img} className="img-fluid" alt={activeWorker.name} style={modalImgStyle} />
          <h4>{activeWorker.position}</h4>
          <p><strong>Location:</strong> {activeWorker.location}</p>
          <p><strong>Bio:</strong> {activeWorker.bio}</p>
          <p><strong>Experience:</strong> {activeWorker.experience}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Employee;
