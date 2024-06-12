import React from 'react'
import Navbar from '../component/navbar'
import Header from '../component/header'
import FeedbackContent from '../component/FeedbackContent'
import Footer from '../component/footer'

function Feedback() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <FeedbackContent/>
        <Footer/>
    </div>
  )
}

export default Feedback