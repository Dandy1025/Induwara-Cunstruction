import React from 'react'
import "../style/headerstyle.css"
import logo from "../assets/logo-color.png"
import cartimg from "../assets/cartimg.png"
import profileicon from "../assets/552721.png"

function Header() {
  return (
    <div className='header d-flex'>
      <img className='logoimg me-5' src={logo} alt="logoimg" />
      <form className="d-flex justify-content-center align-items-center p-2 ms-5 me-auto searchbtn" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <img className='cartimg p-5 mx-3 ms-5' src={cartimg} alt="cartimg" />
      <img className='profileicon p-5' src={profileicon} alt="profile" />
    </div>


  )
}

export default Header