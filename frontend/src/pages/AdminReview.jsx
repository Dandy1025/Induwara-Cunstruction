import React from 'react'
import AdminNavbar from '../component/AdminNavigation'
import AdminHeader from '../component/AdminHeader'
import AdminReviewContent from '../component/AdminReviewContent'
import AdminFooter from '../component/AdminFooter'

function AdminReview() {
  return (
    <div>
        <AdminHeader title="Admin Panel"/>
        <AdminNavbar/>
        <AdminReviewContent/>
        <AdminFooter/>
    </div>
  )
}

export default AdminReview