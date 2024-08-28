import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import backgroundImage from '../assets/Construction.jpg'; // Import the image

const ProjectView = () => {
  return (
    <div>
      <Navbar />
      <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
        <div style={styles.row}>
          <div style={styles.projectDetails}>Project details</div>
          <div style={styles.column}>
            <div style={styles.ordersRents}>Orders & rents</div>
            <div style={styles.employees}>Employees</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundSize: 'cover',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items at the start of the row
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  projectDetails: {
    width: '450px',
    height: '450px',
    backgroundColor: 'rgba(192,192,192,0.8)', // light gray background with opacity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '15px',
  },
  ordersRents: {
    width: '450px',
    height: '220px',
    backgroundColor: 'rgba(192,192,192,0.8)', // light gray background with opacity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '15px',
  },
  employees: {
    width: '450px',
    height: '220px',
    backgroundColor: 'rgba(192,192,192,0.8)', // light gray background with opacity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '15px',
  }
};

export default ProjectView;
