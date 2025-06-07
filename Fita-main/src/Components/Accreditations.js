import React from 'react';
import Image1 from './Img/iso-logo.png'
import Image2 from './Img/istqb.png'
import Image3 from './Img/bc.png'
import Image4 from './Img/pearson-veu-logo.png'
import Image5 from './Img/oracle.png'
import Image6 from './Img/microsoft-logo.png'

const Accreditations = () => {
  return (
    <div>
      <div className="Accreditations-container">
        <h2>Accreditations</h2>
        <div className="imgs">
            <img src={Image1} alt="image" />
            <img src={Image2} alt="image"  />
            <img src={Image3} alt="image"  />
            <img src={Image4} alt="image" />
            <img src={Image5} alt="image" />
            <img src={Image6} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Accreditations;
