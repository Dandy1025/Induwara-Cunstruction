import React from 'react'
import Header from '../component/header'
import Navbar from '../component/navbar'
import logo from '../assets/a4.jpeg'
import logoa from '../assets/a2.jpeg'
import logob from '../assets/a6.jpeg'
import logoc from '../assets/zaa.jpg'
import logod from '../assets/as.jpg'
import logoe from '../assets/cd2.jpeg'
import Footer from '../component/footer';

function Ourproject() {
  return (
    <div>
      <style>{`
      /* Existing Styles */

.row1 {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  background-color: #333;
}

.col-md-4 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  box-sizing: border-box;
}

.thumbnail {
  display: block;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 200px;
  width: 300px;
  margin-left: 90px;
}

.thumbnail a {
  color: #337ab7;
  text-decoration: none;
}

.caption {
  padding: 9px;
  color: #333;
}

.image {
  width: 100%;
  height: 150px;
}

.our {
  text-align: center;
  text-size-adjust: 0%;
  margin-top: 25px;
  font-size: 30px;
  background-color: rgb(255, 153, 0);
  position: relative;
}

.main {
  background-color: #D9D9D9;
}

/* Add Project Button Styles */
.add-project-btn {
  position: absolute;
  top: 15px; /* Adjust this value as necessary */
  right: 20px; /* Adjust this value as necessary */
  background-color: #007bff; /* Button background color */
  color: white; /* Button text color */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.add-project-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .col-md-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .thumbnail {
    margin-left: 45px;
  }
}

@media (max-width: 992px) {
  .col-md-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .thumbnail {
    margin-left: 30px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .thumbnail {
    margin-left: 0;
    width: 100%;
  }

  .add-project-btn {
    top: 10px; /* Adjust to align button as necessary */
    right: 10px; /* Adjust to align button as necessary */
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 576px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .thumbnail {
    margin-left: 0;
    width: 100%;
  }

  .our {
    font-size: 25px;
  }

  .add-project-btn {
    top: 5px; /* Adjust to align button as necessary */
    right: 5px; /* Adjust to align button as necessary */
    font-size: 12px;
    padding: 6px 12px;
  }
}
/* Add this to ourproject.css */
.add-project-btn {
    position: absolute;
    top: 3px; /* Adjust this value as necessary */
    right: 20px; /* Adjust this value as necessary */
    background-color: #ff2200; /* Button background color */
    color: white; /* Button text color */
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 10px;
  }
  
  .add-project-btn:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
  
  /* Responsive Adjustments */
  @media (max-width: 1200px) {
    .add-project-btn {
      top: 110px; /* Adjust to align button as necessary */
      right: 15px; /* Adjust to align button as necessary */
      font-size: 15px;
      padding: 9px 18px;
    }
  }
  
  @media (max-width: 992px) {
    .add-project-btn {
      top: 105px; /* Adjust to align button as necessary */
      right: 10px; /* Adjust to align button as necessary */
      font-size: 14px;
      padding: 8px 16px;
    }
  }
  
  @media (max-width: 768px) {
    .add-project-btn {
      top: 100px; /* Adjust to align button as necessary */
      right: 8px; /* Adjust to align button as necessary */
      font-size: 13px;
      padding: 7px 14px;
    }
  }
  
  @media (max-width: 576px) {
    .add-project-btn {
      top: 95px; /* Adjust to align button as necessary */
      right: 5px; /* Adjust to align button as necessary */
      font-size: 12px;
      padding: 6px 12px;
    }
  }
      `}
      </style>
      <div>
        <Header />
        <Navbar />
        <div className="main">
          <div className="our">
            <p>Our Projects</p>
            <button className="add-project-btn">Add Project</button>
          </div>
          <div className="row1">
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/lights.jpg">
                  <img src={logo} alt="Lights" className="image" />
                  <div className="caption">
                    <p>ICTAD Company Gampaha</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/nature.jpg">
                  <img src={logoa} alt="Nature" className="image" />
                  <div className="caption">
                    <p>House Constrution Hikkaduwa</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/fjords.jpg">
                  <img src={logob} alt="Fjords" className="image" />
                  <div className="caption">
                    <p>House Construction Hambantota</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row1">
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/lights.jpg">
                  <img src={logod} alt="Lights" className="image" />
                  <div className="caption">
                    <p>Multi storeyed Teaching Hall Nawala</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/nature.jpg">
                  <img src={logoc} alt="Nature" className="image" />
                  <div className="caption">
                    <p>Airport Garden Hotel Seeduwa</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/fjords.jpg">
                  <img src={logoe} alt="Fjords" className="image" />
                  <div className="caption">
                    <p>Galle Rent House </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Ourproject
