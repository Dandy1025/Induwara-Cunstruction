import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/navbarstyle.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-around w-100">
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">Employees</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">Suppliers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar