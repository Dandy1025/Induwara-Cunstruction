import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/navbarstyle.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary" style={{ width: '100%', zIndex: 1020}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-around w-100">
            <li className="nav-item fw-bold">
              <Link to={'/'} className="nav-link underline">Home</Link>
            </li>
            <li className="nav-item fw-bold">
              <Link to={'/services'} className="nav-link underline">Services</Link>
            </li>
            <li className="nav-item dropdown fw-bold">
              <a className="nav-link underline dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={'/ongoing'} className="dropdown-item">Ongoing Projects</Link>
                </li>
                <li>
                  <Link to={'/complete'} className="dropdown-item">Completed Projects</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item fw-bold">
              <Link to={'/Employee'} className="nav-link underline">Employees</Link>
            </li>
            <li className="nav-item fw-bold">
              <Link to={'/Suppliers'} className="nav-link underline">Suppliers</Link>
            </li>
            <li className="nav-item fw-bold">
              <Link to={'/Search'} className="nav-link underline">Search</Link>
            </li>
            <li className="nav-item fw-bold">
              <Link to={'/aboutus'} className="nav-link underline">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
