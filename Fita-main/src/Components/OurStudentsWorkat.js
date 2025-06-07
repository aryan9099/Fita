import React from 'react';
import './Style.css';
import Image from './Img/students-placement-1.jpg'

const OurStudentsWorkAt = () => {
  return (
    <div>
      <div className="Our-Students-Work-at">
        <h1>Our Students Work at</h1>
        <div className="image">
        <img src={Image} alt="image" />
        </div>
        <button>For Placed Student List</button>
      </div>
    </div>
  )
}

export default OurStudentsWorkAt;
