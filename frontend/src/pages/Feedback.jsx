import React from 'react'
import Navbar from '../component/navbar';
import Header from '../component/header';
import Footer from '../component/footer';
import FeedbackContent from '../component/FeedbackContent'
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