import React from 'react';
import './Style.css';

const Features = () => {
  return (
    <div>
      <div className="features">
        <h1>Features</h1>
        <div className="feature-boxes">
            <div className="box1" id="1">
                <span><i class="fa-regular fa-clock"></i></span>
                <h4>Real-Time Experts as Trainers</h4>
                <p>At FITA Academy, You will Learn from the Experts from 
                    industry who are Passionate in sharing their Knowledge 
                    with Learners. Get Personally Mentored by the Experts.</p>
            </div>
            <div className="box2" id="2">
            <span><i class="fa-solid fa-tv"></i></span>
                <h4>LIVE Project</h4>
                <p>Get an Opportunity to work in Real-time Projects that 
                    will give you a Deep Experience. Showcase your Project
                     Experience & Increase your chance of getting Hired!</p>
            </div>
            <div className="box3" id="3">
            <span><i class="fa-solid fa-circle-notch"></i></span>
                <h4>Certification</h4>
                <p>Get Certified by FITA Academy. Also, get Equipped to Clear
                     Global Certifications. 72% FITA Academy Students appear
                      for Global Certifications and 100% of them Clear it.</p>
            </div>
            <div className="box4" id="4">
            <span><i class="fa-regular fa-money-bill-1"></i></span>
                <h4>Affordable Fees</h4>
                <p>At FITA Academy, Course Fee is not only Affordable,
                     but you have the option to pay it in Installments.
                      Quality Training at an Affordable Price is our Motto.</p>
            </div>
            <div className="box5" id="5">
            <span><i class="fa-solid fa-note-sticky"></i></span>
                <h4>Flexibility</h4>
                <p>At FITA Academy, you get Ultimate Flexibility. Classroom or Online Training? Early morning or Late evenings? Weekdays or Weekends? Regular Pace or Fast Track? - Pick whatever suits you the Best.</p>
            </div>
            <div className="box6" id="6">
            <span><i class="fa-solid fa-trophy"></i></span>
                <h4>Placement Support</h4>
                <p>Tie-up & MOU with more than 1500+ Small & Medium Companies to Support you with Opportunities to Kick-Start & Step-up your Career.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
