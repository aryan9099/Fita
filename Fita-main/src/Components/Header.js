import React from 'react';
import './Style.css';

const Header = () => {
  return (
   <>
   <div className="header">
    <a href="http:tel:93450 45466">Chennai, Bangalore & Online: 93450 45466</a>|
    <a href="http:tel:95978 88270">Coimbatore: 95978 88270</a>|
    <a href="http:tel:97900 94102">Madurai: 97900 94102</a>|
    <a href="http:tel:93635 21112">Pondicherry: 93635 21112</a>
    <div className="icon">
       <a href=""><i class="ri-facebook-box-fill"></i></a>
        <a href=""><i class="ri-instagram-line"></i></a>
       <a href=""><i class="ri-youtube-fill"></i></a>
        <a href=""><i class="ri-linkedin-fill"></i></a>
     </div>
   </div>
   </>
  );
}

export default Header;
