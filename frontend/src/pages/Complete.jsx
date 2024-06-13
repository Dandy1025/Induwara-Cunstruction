import React from 'react'
import '../style/ongoing.css'

import logo from '../assets/cd2.jpeg'
import logoa from '../assets/a2.jpeg'
import Header from '../component/header'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

function Complete() {
  return (
    <div>
      <Header />
      <Navbar />


      <div className="mainone">
        <div className="para">Completed Projects</div>
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="/w3images/lights.jpg">
                <img src={logo} alt="Lights" className="image" />
                <div className="caption">
                  <p>Galle Rent House</p>
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
        </div>
      </div>
      <div>
      </div>
      <Footer />
    </div>
  )
}

export default Complete
