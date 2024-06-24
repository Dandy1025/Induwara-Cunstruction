import React from 'react'
import logoa from '../assets/a2.jpeg'
import Header from '../component/header';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
function Projectindetails() {
  return (
    <div>
        <Navbar/>
      <div style={styles.content}>
        <div style={styles.background}>
          <div style={styles.row}>
            <div style={styles.col}>
              <div style={styles.imageContainer}>
                <img src={logoa} alt="Lights" style={styles.image} />
              </div>
            </div>
            <div style={styles.col}>
              <div style={styles.details}>
                <h2>House Constrution Hikkaduwa</h2>
                <p><strong>Project:</strong> House Constrution Hikkaduwa</p>
                <p><strong>Client:</strong> A.P.G Pathmasiri</p>
                <p><strong>Location:</strong> Hikkaduwa </p>
                <p><strong>Year of completed:</strong> 2017</p>
                <p><strong>Project value:</strong> Rs. 22 Million</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
const styles = {
 
    content: {
      padding: '20px',
      backgroundColor: '#f0f0f0',
    },
    background: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '40px 20px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      width: '100%',
    },
    col: {
      flex: 1,
      padding: '15px',
    },
    details: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: '20px',
      borderRadius: '10px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    imageContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      borderRadius: '15px',
      height: 'auto',
    },
    
  };
  
 

export default Projectindetails
