import React from 'react'
import logo from '../assets/a4.jpeg'
import logoa from '../assets/as.jpg'
import logob from '../assets/zaa.jpg'

import Header from '../component/header'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import '../style/ongoing.css'
function Ongoing() {
  return (
    <div>
        <Header/>
        <Navbar/>
      

<div className="mainone">
<div className="para">Ongoing Projects</div>

<div className="row">
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
          <p>ICC Center Minuwangoda</p>
        </div>
      </a>
    </div>
  </div>

  <div className="col-md-4">
    <div className="thumbnail">
      <a href="/w3images/nature.jpg">
        <img src={logob} alt="Nature" className="image" />
        <div className="caption">
          <p>Panadura Construction </p>
        </div>
      </a>
    </div>
  </div>



</div>
</div>
<Footer/>
    </div>
  )
}

export default Ongoing
