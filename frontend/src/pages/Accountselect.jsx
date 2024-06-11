import React from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import { Image, Button } from 'react-bootstrap';
import '../style/Accountselectstyle.css';
import Navbar from '../component/navbar';
import a from '../assets/Construction.jpg';
import b from '../assets/Customer account.jpg';
import c from '../assets/employees account.jpg';
import d from '../assets/Supplier account.webp';
import { Link } from 'react-router-dom';

export default function Accountselect() {
  return (
    <>
      <div><Header /></div>
      <div><Navbar /></div>

      <h1 style={{ textAlign: 'center', margin: '5px 0', background: '#FF7D29', color: 'white' }}>Account Selection</h1> {/* Adjust the text as needed */}


      <div style={{ position: 'relative' }}>
        <Image src={a} fluid style={{ width: '100%', height: '600px' }} />


        <div style={{ position: 'absolute', top: '20%', display: 'flex', justifyContent: 'space-around', width: '100%' }}>

          <div style={{ width: '30%' }}>
            <Image src={b} fluid style={{ height: 'auto', borderTopLeftRadius: '5%', borderTopRightRadius: '5%' }} />
            <Link to={'/signupCustomers'}>
              <Button variant="primary" className="button-hover-effect" style={{ width: '100%', marginTop: '1%', fontFamily: 'poppins', background: '#FF7D29' }}>Customer Registration</Button>
            </Link>
            <ul style={{ background: '#ffffff', marginTop: '1%', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', fontFamily: 'poppins' }}>
              <li>Post Construction Projects</li>
              <li>Request Employees</li>
              <li>Order Construction Material and Equipment</li>
            </ul>
          </div>


          <div style={{ width: '30%' }}>
            <Image src={c} fluid style={{ height: 'auto', borderTopLeftRadius: '5%', borderTopRightRadius: '5%' }} />
            <Link to={'/signupEmployees'}>
              <Button variant="primary" className="button-hover-effect" style={{ width: '100%', marginTop: '1%', fontFamily: 'poppins', background: '#FF7D29' }}>Employee Registration</Button>
            </Link>
            <ul style={{ background: '#ffffff', marginTop: '1%', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', fontFamily: 'poppins' }}>
              <li>Take On Jobs</li>
              <li>Request Employees</li>
              <li>Order Construction Material and Equipment</li>
            </ul>
          </div>


          <div style={{ width: '30%' }}>
            <Image src={d} fluid style={{ height: 'auto', borderTopLeftRadius: '5%', borderTopRightRadius: '5%' }} />
            <Link to={'/signupSuppliers'}>
              <Button variant="primary" className="button-hover-effect" style={{ width: '100%', marginTop: '1%', fontFamily: 'poppins', background: '#FF7D29' }}>Supplier Registration</Button>
            </Link>
            <ul style={{ background: '#ffffff', marginTop: '1%', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', fontFamily: 'poppins' }}>
              <li>Post Inventory</li>
              <li>Take Orders</li>
              <li>Make Deliveries</li>
            </ul>
          </div>
        </div>
      </div>

      <div><Footer /></div>
    </>
  );
}