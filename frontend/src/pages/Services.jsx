import React from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import { Image, Button } from 'react-bootstrap';
import a from '../assets/Construction.jpg';
import Navbar from '../component/navbar';
import b from '../assets/labor icon.webp';
import c from '../assets/Equipment.webp';
import d from '../assets/construction material icon.png';
import e from '../assets/dispatch.png';

export default function Services() {
  return (
    <>
      <div><Header/></div>
      <div><Navbar/></div>

      <div style={{ position: 'relative' }}>
        <Image src={a} fluid style={{ width: '100%', height: '900px' }} />
        
        
        <div style={{ position: 'absolute', top: '15%', left: '50px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px',width:'40%',}}>
          
          <h2>Our Services</h2>
          
          
          <ul>
            <li>
              Providing Manual labor for construction : From frontline workers to backline designers can be hired.<br/>
              <Image src={b} style={{ width: '80px', height: '80px', marginTop:'3%',marginBottom:'3%'}} />
            </li>
            <li>
              Rental Equipment supply for construction projects : Reusable equipment can be rented through the here.<br/>
              <Image src={c} style={{ width: '80px', height: '80px', marginTop:'3%',marginBottom:'3%' }} />
            </li>
            <li>
              Construction Material supply : Every type of construction material can be ordered and delivered to the  construction site.<br/>
              <Image src={d} style={{ width: '80px', height: '80px', marginTop:'3%',marginBottom:'3%' }} />
            </li>
            <li>
              Employee scheduling and Dispatching : Choosen employees will be allocated for a project and dispatched accordingly.<br/>
              <Image src={e} style={{ width: '80px', height: '80px', marginTop:'3%',marginBottom:'3%' }} />
            </li>
          </ul>
        </div>
      </div>

      <div><Footer/></div>
    </>
  );
}