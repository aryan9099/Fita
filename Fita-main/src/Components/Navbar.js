import React from 'react';
import './Style.css';
import logo from './Img/Appteknowlogo.png';


const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <a href="/"><img src={logo} alt="" /></a>
       <div className="dropdown">
       <a id="btn" href='/'>Courses<i class="ri-arrow-down-s-fill"></i></a>
       <div className="dropdown-content">
          <ul>
            <ul id='software'>
            <li >Software Development<i class="ri-arrow-right-s-fill"></i></li><hr/>
            <ul className='software-dropdown'>
              <li><a href="">C</a></li><hr />
              <li><a href="">C++</a></li><hr />
              <li><a href="">Java</a></li>
            </ul>
            </ul>
            <li>Java<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Web Development<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Graphic Design<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Digital Marketing<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Mobile Development<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Cloud & DevOps<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Languages & Proficiency Exam:<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Software Testing<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Artifical Intelligence<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>DataBase<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>RPA<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Big Data<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Data Science & Business Intelligence<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>CRM<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Networking & Cyber Security<i class="ri-arrow-right-s-fill"></i></li><hr />
            <li>Others<i class="ri-arrow-right-s-fill"></i></li><hr />
           </ul>
       </div>
       </div>
        <div className="nav-right">
            <a className="btn" href='/'>Corporate Training</a>
          <div className='drop'>
          <a className="btn business" href='/'>For Business<i class="ri-arrow-down-s-fill"></i></a>
            <div className='menu'>
               <li> <a href="/">Hire From FITA Academy</a></li><hr />
                <li><a href="/">Become an Instructor</a></li><hr />
                <li><a href="/">Careers</a></li><hr />
               <li> <a href="/">Business Opportunities</a></li>
            </div>
          </div>
            <div className='drop'>
            <a className="btn" href='/'>Testimonials<i class="ri-arrow-down-s-fill"></i></a>
               <div className='menu'>
                <li><a href="">Student Testimonials</a></li><hr />
               <li><a href="">Success Stories</a></li>
               </div>
            </div>
           <div className="drop">
           <a className="btn" href='/'>Resources<i class="ri-arrow-down-s-fill"></i></a>
           <div className="menu">
            <li><a href="">Blog</a></li><hr />
            <li><a href="">Interview Questions</a></li><hr />
            <li><a href="">Tutorials</a></li><hr />
            <li><a href="">Freshers Salary</a></li><hr />
            <li><a href="">Books</a></li>
           </div>
           </div>
           <div className="drop">
           <a className="btn" href='/'>Contact Us<i class="ri-arrow-down-s-fill"></i></a>
           <div className="menu">
            <li><a href="">All Branches</a></li><hr />
            <li><a href="">Chennai: Anna Nagar</a></li><hr />
            <li><a href="">Bangalore: Marathalli</a></li><hr />
            <li><a href="">Coimbatore: Saravanampatty</a></li>
           </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
