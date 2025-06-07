import React from 'react';
import './Style.css';

const Tutorials = () => {
  return (
    <div>
      <div className="tutorials-container">
        <h1>Tutorials</h1>
        <div className="tutorials-program">
            <button><a href=""></a>Python Tutorial</button>
            <button><a href=""></a>Java Tutorial</button>
            <button><a href=""></a>Data Science Tutorial</button>
            <button><a href=""></a>Ethical Hacking Tutorial</button>
            <button><a href=""></a>AWS Tutorial</button>
            <button><a href=""></a>Full Stack Tutorial</button>
            <button><a href=""></a>DevOps Tutorial</button>
            <button><a href=""></a>Salesforce Tutorial</button>
            <button><a href=""></a>Selenium Tutorial</button>
            <button><a href=""></a>Angular Tutorial</button>
            <button><a href=""></a>Software Testing Tutorial</button>
            <button><a href=""></a>Ethical Hacking Tutorial</button>
        </div>
        <h1>Interview Questions</h1>
        <div className="interview-questions">
        <button><a href=""></a>Python Interview Questions</button>
            <button><a href=""></a>Java Interview Questions</button>
            <button><a href=""></a>Data Science Interview Questions</button>
            <button><a href=""></a>Ethical Hacking Interview Questions</button>
            <button><a href=""></a>AWS Interview Questions</button>
            <button><a href=""></a>Full Stack Interview Questions</button>
            <button><a href=""></a>DevOps Interview Questions</button>
            <button><a href=""></a>Salesforce Interview Questions</button>
            <button><a href=""></a>Selenium Interview Questions</button>
        </div>
          <div className="read-more">
            <a href="">Read More</a>
          </div>
        <h1>FITA Academy Branches</h1>
        <h3>Chennai</h3>
        <div className="chennai-branches">
            <button><a href=""></a>Velachery</button>
            <button><a href=""></a>Anna Nagar</button>
            <button><a href=""></a>T.Nagar</button>
            <button><a href=""></a>Tambaram</button>
            <button><a href=""></a>Thoraipakkam OMR</button>
            <button><a href=""></a>Porur</button>
        </div>
        <h3>Bangalore</h3>
        <div className="Bangalore-branches branch">
        <button><a href=""></a>Marathahalli</button>
        </div>
        <h3>Coimbatore</h3>
        <div className="Coimbatore-branches branch">
        <button><a href=""></a>Saravanampatty</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button><a href=""></a>Singanallur</button>
        </div>
        <h3>Other Locations</h3>
        <div className="Other-Locations-branches branch">
        <button><a href=""></a>Madurai</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button><a href=""></a>Pondicherry</button>
        </div>
      </div>
    </div>
  )
}

export default Tutorials;
