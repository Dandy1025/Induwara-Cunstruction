import React from 'react'
import Header from '../component/header'
import Navbar from '../component/navbar'
import Footer from '../component/footer';

function Renovation() {
  return (
    <div>
      <style>{`
      .interface {
    display: flex;
    flex-direction: column;
    width: 700px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color:#ccc;
   height: 500px;
   margin-top: 20px;
   margin-bottom: 20px;
  }
  
  .label {
    margin-top: 10px;
    font-weight: bold;
  }
  
  .input[type="text"],
  .input[type="date"]
 {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
 
  }
  
  .button {
    margin-top: 15px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .button:first-of-type {
    background-color: #4CAF50;
    color: white;
    width: 40%;
  }
  
  .button:last-of-type {
    background-color: #f44336;
    color: white;
    width: 40%;

  }
  
  .button:hover {
    opacity: 0.8;
    
  }
  
  
.main{
background-color:darkgrey;

}
  



        `}
      </style>
      <div>
        <Navbar />

        <div className="interface">

          <label htmlFor="projectName">Project Name</label>
          <input type="text" id="projectName" placeholder="Enter project name" />

          <label htmlFor="startDate">Project type</label>
          <textarea id="description" name="description" rows="4" cols="50" placeholder="House/new building/renovation/location">

          </textarea>

          <label htmlFor="startDate">Start date</label>
          <input type="date" id="startDate" />

          <label htmlFor="endDate">End date</label>
          <input type="date" id="endDate" />

          <label htmlFor="customerDetails">Customer details</label>
          <textarea id="description" name="details" placeholder="client name/address
       " >
          </textarea><br /><br />
          <div className="btn">
            <button> Post</button>
            <button>Cancel</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default Renovation
