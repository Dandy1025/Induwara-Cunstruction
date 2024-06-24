import React from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../component/header';
import Navbar from '../component/navbar';
import logo from '../assets/bd.jpeg';
import logoa from '../assets/dba.jpeg';
import Footer from '../component/footer';
function Category() {
  return (
    <div>
      <style>
        {`
          .background {
            position: relative;
            width: 100%;
            overflow: auto;
          }

          .background::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-image: url('frontend/src/assets/Construction.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.6;
            z-index: -1;
          }

          .col1 {
            position: relative;
            padding: 15px;
            flex: 0 0 33.333333%;
            height: auto;
            max-width: 33.333333%;
            box-sizing: border-box;
            margin: 20px;
          }

          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .content-wrapper {
            margin-top: 50px;
            margin-bottom: 200px; /* Increase bottom margin to prevent overlap with footer */
            margin-left: 350px;
          }

          /* Responsive adjustments */
          @media (max-width: 1200px) {
            .content-wrapper {
              margin-left: 200px;
            }

            .col1 {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (max-width: 992px) {
            .content-wrapper {
              margin-left: 100px;
            }

            .col1 {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (max-width: 768px) {
            .content-wrapper {
              margin-left: 50px;
              margin-right: 50px;
            }

            .col1 {
              flex: 0 0 100%;
              max-width: 100%;
              margin: 10px;
            }
          }

          @media (max-width: 576px) {
            .content-wrapper {
              margin-left: 20px;
              margin-right: 20px;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            .col1 {
              flex: 0 0 100%;
              max-width: 100%;
              margin: 5px;
            }
          }
        `}
      </style>

      <div>
        <Navbar />
        <div className="background">
          <div className="content-wrapper">
            <div className="row">
              <div className="col1">
                <Card className="bg" style={{ height: '260px' }}>
                  <a href="/renovation">
                    <img src={logo} alt="Renovation" className="image" />
                    <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                      <div className="pp">
                        <Card.Link href="/renovation" style={{ color: "white" }}>Renovation</Card.Link>
                      </div>
                    </Card.ImgOverlay>
                  </a>
                </Card>
              </div>
              <div className="col1">
                <Card className="bg" style={{ height: '260px' }}>
                  <a href="/new-building">
                    <img src={logoa} alt="New Building" className="image" />
                    <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                      <div className="pp">
                        <Card.Link href="/new-building" style={{ color: "white" }}>New Building</Card.Link>
                      </div>
                    </Card.ImgOverlay>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Category;
