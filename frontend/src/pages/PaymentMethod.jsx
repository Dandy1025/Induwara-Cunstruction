import React from 'react';
import Header from '../component/header';
import PaymentContent from '../component/PaymentContent';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

function PaymentMethod() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <PaymentContent/>
        <Footer/>
    </div>
  );
}

export default PaymentMethod;
