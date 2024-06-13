import React from 'react'
import Navbar from '../component/navbar';
import Header from '../component/header';
import Footer from '../component/footer';
import NotificationContent from '../component/NotificationContent'

function Notification() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <NotificationContent/>
        <Footer/>
    </div>
  )
}

export default Notification