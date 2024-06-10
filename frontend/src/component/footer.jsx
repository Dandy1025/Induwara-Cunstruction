import React from 'react';
import '../style/footerstyle.css';

export default function Footer() {
  return (
    <div>
      <fieldset className="footer-fieldset" style={{ zIndex: 9999 }}>
        <p>
          Email: <a href='' className="footer-link">induwaraconstructions@email.com</a> | Phone: <a href='' className="footer-link">+94 70 240 3106 </a><br/>
          201/2, Pahala Kosgama, Kosgama. <br/>
          © 2024 Induwara Constructions. All rights reserved.
        </p>
      </fieldset>
    </div>
  );
}
