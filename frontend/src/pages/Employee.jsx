import React from 'react'
import Navbar from '../component/navbar';
import Header from '../component/header';
import Footer from '../component/footer';
import EmployeeContent from '../component/EmployeeContent'

function Employee() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <EmployeeContent/>
        <Footer/>
    </div>
  )
}

export default Employee