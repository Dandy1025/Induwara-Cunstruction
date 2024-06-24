import React from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import { Image } from 'react-bootstrap';
import a from '../assets/Construction.jpg';
import Navbar from '../component/navbar';

export default function Services() {
  return (
    <>
      <div><Navbar/></div>

      <div style={{ position: 'relative' }}>
        <Image src={a} fluid style={{ width: '100%', height: '613px' }} />

    
        <div style={{
          backgroundColor:'black',
          color:'white',
          position: 'absolute',
          top: '20%',
          left: '50%',
          borderTopLeftRadius:'11px',
          transform: 'translateX(-50%)',
          width: '88%',
          fontFamily: 'poppins',
          zIndex: 2
        }}>
          <h1 style={{textAlign: 'center'}}>About Us</h1>
          <h3 style={{marginLeft:'2%'}}><b>Terms and Conditions</b></h3>
        </div>

        
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: 'black',
          maxHeight: '75%',
          overflowY: 'auto',
          padding: '20px',
          borderRadius: '10px',
          width: '90%',
          zIndex: 1
        }}>
         
          <div style={{ paddingTop: '100px' }}> 
            <p>
            "Induwara Constructions" is a comprehensive construction management platform that enhances project efficiency 
          through advanced tracking and collaboration tools. By using our services, you agree to our terms, ensuring 
          your construction projects meet the highest industry standards within budget and on schedule.
          <br></br>
          <br></br>
          The Terms and Conditions of Induwara Constructions are governed by and construed in accordance with 
          the laws of Sri Lanka. Any disputes or claims arising out of or in connection with the website shall be 
          subject to the exclusive jurisdiction of the courts in Colombo. This clause ensures that any legal 
          proceedings will be conducted under the laws pertinent to Induwara Constructions's operating location.
        <br></br>
        <br></br>
          Users of Induwara Constructions must adhere to all applicable laws and regulations while 
          utilizing our services. Prohibited activities include, but are not limited to, unauthorized access, data theft, 
          misuse of services, and infringement of intellectual property rights. It is the user's responsibility to maintain 
          the confidentiality of their account information and to use the platform in a manner that respects the rights and 
          safety of all parties involved.
          <br></br>
          <br></br>
          To register on Induwara Constructions, users must provide valid contact information and create a secure password. 
          We employ industry-standard security measures, including encryption and regular audits, to protect user accounts. 
          Users are responsible for maintaining the confidentiality of their login credentials and must notify us immediately 
          of any unauthorized use of their account.
          <br></br>
          <br></br>
          All content on Induwara Constructions, including text, graphics, logos, and software, is the property of Induwara Constructions 
          or its content suppliers and protected by international copyright and intellectual property laws. Users may use the site 
          content for their personal and non-commercial projects, but any other use, including reproduction, modification, or 
          distribution, is strictly prohibited without prior written consent from Induwara Constructions.
          <br></br>
          <br></br>
          Induwara Constructions endeavors to ensure that all information and services on our website are accurate and reliable. 
          However, we cannot be held liable for any errors, omissions, or inaccuracies that may be found. We also disclaim all 
          liability for any damages or losses resulting from the use of our website or reliance on its content. This limitation 
          of liability is a fundamental element of the basis of the bargain between Induwara Constructions and its users.
          <br></br>
          <br></br>
          We value your privacy and are committed to protecting your personal information. For details on how we collect, use, 
          and safeguard your data, please review our Privacy Policy. This policy outlines our practices regarding data collection, 
          including the use of cookies, and explains your rights and choices concerning your information.
            </p>
            
          </div>
        </div>
      </div>

      <div><Footer/></div>
    </>
  );
}