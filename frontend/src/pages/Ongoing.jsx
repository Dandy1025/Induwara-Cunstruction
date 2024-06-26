import React from 'react'
import logo from '../assets/a4.jpeg'
import logoa from '../assets/as.jpg'
import logob from '../assets/zaa.jpg'
import Header from '../component/header'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
function Ongoing() {
  return (
    <div>
      <style>{`
      .mainone {
  background-color: #333;
}

.para {
  font-size: 40px;
  margin-top: 60px;
  color: #fff;
  margin-left: 30px;
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
  margin-bottom: 140px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 200px;
  width: 300px;
  margin-left: 90px;
  margin-top: 40px;
}

.thumbnail a {
  color: #337ab7;
  text-decoration: none;
}

.caption {
  padding: 9px;
  color: #333;
}

.underline {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 150px;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .para {
    font-size: 35px;
    margin-left: 20px;
  }

  .col-md-4 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .thumbnail {
    margin-left: 45px;
  }
}

@media (max-width: 992px) {
  .para {
    font-size: 30px;
    margin-left: 15px;
  }

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
  .para {
    font-size: 25px;
    margin-left: 10px;
  }

  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .thumbnail {
    margin-left: 0;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .para {
    font-size: 20px;
    margin-left: 5px;
  }

  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .thumbnail {
    margin-left: 0;
    width: 100%;
  }
}
      `}
      </style>
      <div>
        <Navbar />


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
        <Footer />
      </div>
    </div>
  )
}

export default Ongoing
