import React from 'react';
import '../style/footerstyle.css';

export default function Footer() {
  return (
    <footer>
      <fieldset className="footer-fieldset" style={{ zIndex: 9999 }}>
        <p>
          Email: <a href='mailto:induwaraconstructions@email.com' className="footer-link">induwaraconstructions@email.com</a> | Phone: <a href='tel:+94702403106' className="footer-link">+94 70 240 3106 </a><br/>
          201/2, Pahala Kosgama, Kosgama. <br/>
          © 2024 Induwara Constructions. All rights reserved.
        </p>
      </fieldset>
    </footer>
  );
}
