import React from 'react';

const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
        <div className="number-box">
            <a href="tel:9131934880"><i class="ri-smartphone-line"></i>+91 9131934880</a>
        </div>|
        <div className="request-box">
            <h4><a href="">Request a call back</a></h4>         
        </div>
        {/* <div className="quick-enquiry">
            <form className="main-form">
                <div className="heading"><h1>Quick Enquiry</h1></div>
                <div className="name">
                    <input type="text" className="name" id="name" placeholder="Name*" /><hr />
                    <span className="NameError"></span>
                </div>
                <div className="email">
                    <input type="email" className="email" id="email" placeholder="Email*" /><hr />
                    <span className="emailError"></span>
                </div>
                <div className="number">
                <select className="section-option">
                    <option value="/">+91</option>
                    <option value="+44">UK(+44)</option>
                    <option value="+1">USA(+1)</option>
                    <option value="+20">Egypt(+20)</option>
                </select>
                <input type="number" className="number" id="number"/><hr />
                </div>
                <div className="select-branch">
                    <select name="select-branch" id="select-branch">
                        <option selected disabled hidden>Select the Branch*</option>
                        <option value="Velanchery">Velachery</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>  
                    </select><hr />
                </div>
                <div className="select-course">
                    <select name="select-course" id="select-course">
                        <op tion selected disabled hidden>Select the course*</op>
                        <option value="Angular js">Angular js</option>
                        <option value="React.js">React.js</option>
                        <option value="Java">Java</option>  
                    </select><hr />
                </div>
                <div className="select-batch">
                    <select name="select-course" id="select-batch">
                        <option selected disabled hidden>Select the batch*</option>
                        <option value="Angular js">Immediately</option>
                        <option value="React.js">In 2 weeks</option>
                        <option value="Java">In a month</option>  
                    </select><hr />
                </div>
                <div className="reCAPTCHA"></div>
                <div className="submit-btn">
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div> */}
        <div className="whatsApp">
        <a href="https://wa.me/9131934880" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
         </div>
         {/* <div className="live-chat">
           <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-weixin"></i></a>
         </div> */}
        </div>
    </div>
  )
}

export default Footer;
