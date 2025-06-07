import React from 'react';
import './Style.css';
import image from './Img/main-banner-fita.png'

const Enquire = () => {
  return (
    <div>
      <div className="enquire-container">
        <div className="right">
            <h3>Get trained by Industry Experts via</h3>
            <h1>Instructor-led Live Online or Classroom Training</h1>
            <h3>with 100% Placement Support</h3>
            <button className='Enquire-btn'>Enquire Now</button>
        </div>
        <div className="left">
            <img src={image} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Enquire;
