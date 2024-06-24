import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/bg.jpg';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

function ShedulePage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use imported background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    opacity: 0.7, // Adjust opacity to make content more visible
  };

  return (
    <div>
      <Navbar/>
      <div className="App container" style={backgroundImageStyle}>
        <main className="App-main my-4">
          <section className="task-board">
            <h2 className="my-4">Task Schedule</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Start Date</th>
                  <th>Duration (Days)</th>
                  <th>Completed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Task 1</td>
                  <td>2024/05/02</td>
                  <td>5</td>
                  <td>Incomplete</td>
                  <td>In Progress (S)</td>
                </tr>
                <tr>
                  <td>Task 2</td>
                  <td>2024/05/09</td>
                  <td>3</td>
                  <td>Incomplete</td>
                  <td>Not Started (NS)</td>
                </tr>
                {/* Add more task rows here */}
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default ShedulePage;
