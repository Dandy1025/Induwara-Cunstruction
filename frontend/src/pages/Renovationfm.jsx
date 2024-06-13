import React from 'react'
import Header from '../component/header'
import Navbar from '../component/navbar'
import '../style/postproject.css';
import Footer from '../component/footer';
import '../style/headerstyle.css'
import '../style/navbarstyle.css'
import '../style/footerstyle.css'
function Postproject() {
  return (
    <div>
      <Header/>
      <Navbar/>

      <div className="interface">
       
       <label htmlFor="projectName">Project Name</label>
       <input type="text" id="projectName" placeholder="Enter project name" />
 
       <label htmlFor="startDate">Project type</label>
       <textarea id="description" name="description" rows="4" cols="50"placeholder="House/new building/renovation/location">
 
 </textarea>
 
       <label htmlFor="startDate">Start date</label>
       <input type="date" id="startDate" />
 
       <label htmlFor="endDate">End date</label>
       <input type="date" id="endDate" />
 
       <label htmlFor="customerDetails">Customer details</label>
       <textarea id="description" name="details"placeholder="client name/address
       " >
 
 </textarea><br/><br/>
 
     
 <div className="btn">
      <button> Post</button>
      <button>Cancel</button>
      </div>
     </div>
     <Footer/>
    </div>
    
  )
}

export default Postproject
