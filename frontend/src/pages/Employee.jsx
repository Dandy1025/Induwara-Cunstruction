import React from 'react'
import Navbar from '../component/navbar'
import Header from '../component/header'
import EmployeeContent from '../component/EmployeeContent'
import Footer from '../component/footer'

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