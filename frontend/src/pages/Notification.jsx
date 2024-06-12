import React from 'react'
import Navbar from '../component/navbar'
import Header from '../component/header'
import NotificationContent from '../component/NotificationContent'
import Footer from '../component/footer'

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