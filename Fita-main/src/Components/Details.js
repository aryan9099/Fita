import React from 'react';
import './Style.css';

const Details = () => {
  return (
    <div>
      <div className="details-box">
        <div className="course"><h4><i class="fa-solid fa-graduation-cap"></i>120+ <br /><span className="s1">Courses</span></h4></div>
        <div className="alumni"><h4><i class="fa-solid fa-user-graduate"></i>50,000+ <br /><span className="s2">Alumni</span></h4></div>
        <div className="hiring-partners"><h4><i class="fa-solid fa-handshake"></i>1500+ <br /><span className="s3">Hiring Partners</span></h4></div>
        <div className="expert-trainers"><h4><i class="fa-solid fa-person-chalkboard"></i>1000+ <br /><span className="s4">Expert Trainers</span></h4></div>
      </div>
    </div>
  )
}

export default Details;
