import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../component/header'
import Navbar from '../component/navbar'
import logo from '../assets/bd.jpeg';
import logoa from '../assets/dba.jpeg';
import Footer from '../component/footer';
import '../style/catergory.css'
import '../style/headerstyle.css'
import '../style/navbarstyle.css'
import '../style/footerstyle.css'

function Category() {
  return (
    <div>
      <Header/>
      <Navbar/>
      
      
     
      <div className="content-wrapper">
        <div className="row">
          <div className="col1">
            <Card className="bg">
              <img src={logo} alt="Renovation" className="image" style={{height:'400px',width:'400px'}} />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center" >
                <div className="pp">
                  <Card.L href="#">Renovation</Card.L>
                  
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col1">
            <Card className="bg">
              <img src={logoa} alt="New Building" className="image" style={{height:'400px',width:'400px'}} />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <div className="pp">
                  <Card.Link href="#">New Building</Card.Link>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>

     
    { <Footer/> }
    </div>
  )
}

export default Category
