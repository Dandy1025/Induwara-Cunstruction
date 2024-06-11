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
                            <Link to={'/'}>
                            <a className="nav-link underline">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link to={'services'}>
                            <a className="nav-link underline">Services</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown fw-bold">
                            <a className="nav-link underline dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={'/ongoingprojrct'} style={{textDecoration:'none'}}>
                                <li><a className="dropdown-item" href="#">Ongoing Projects</a></li>
                                </Link>
                                <Link to={'/completeproject'} style={{textDecoration:'none'}}>
                                <li><a className="dropdown-item" href="#">Completed Projects</a></li>
                                </Link>
                            </ul>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link to={'/Employees'}>
                            <a className="nav-link underline">Employees</a>
                            </Link>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link to={'/Suppliers'}>
                            <a className="nav-link underline" href="#">Suppliers</a>
                            </Link>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link to={'/Search'}>
                            <a className="nav-link underline" href="#">Search</a>
                            </Link>
                        </li>
                        <li className="nav-item fw-bold">
                            <Link to={'/aboutus'}>
                            <a className="nav-link underline" href="#">About Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
