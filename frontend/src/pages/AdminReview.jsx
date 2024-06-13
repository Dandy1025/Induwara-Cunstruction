import React from 'react'
import Navbar from '../component/AdminNavigation'
import Header from '../component/AdminHeader'
import AdminReviewContent from '../component/AdminReviewContent'
import Footer from '../component/AdminFooter'

function AdminReview() {
  return (
    <div>
        <Header title="Admin Panel"/>
        <Navbar/>
        <AdminReviewContent/>
        <Footer/>
    </div>
  )
}

export default AdminReview