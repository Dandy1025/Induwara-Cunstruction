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
import '../style/ourproject.css'
import '../style/headerstyle.css'
import '../style/navbarstyle.css'
import '../style/footerstyle.css'
import '../style/pe.css'

function Ourproject() {
  return (
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
  )
}

export default Ourproject
