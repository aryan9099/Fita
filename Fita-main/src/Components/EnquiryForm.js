import React,{useState} from 'react';
import './Style.css';

const EnquiryForm = () => {
    const [name , setName] = useState("");
   const [email , setEmail] = useState("");
   const [number , setNumber] = useState("");
   const [isValidName , setIsValidName] = useState(true);
   const [isValidEmail , setIsValidEmail] = useState(true);
   const [isValidNumber , setIsValidNumber] = useState(true);
   const [selectedOption , setSelectedOption] = useState("");
   const [selectedOptionCourse , setSelectedCourseOption] = useState("");
   const [selectedOptionBatch , setSelectedBatchOption] = useState("");
   const [error , setError ] = useState("");
   const [errorCourse , setErrorCourse ] = useState("");
   const [errorBatch , setErrorBatch ] = useState("");

    const handleSelectedChange = (e) =>{
      const selectedValue = e.target.value;
      setSelectedOption(selectedValue);
      if(selectedValue == ""){
       setError("*Please select a branch*");
      } else{
       setError("")
      }
    }
    const handleSelectedCourseChange = (e) =>{
     const selectedCourseValue = e.target.value;
     setSelectedCourseOption(selectedCourseValue);
     if(selectedCourseValue == ""){
      setErrorCourse("*Please select a Course*");
     } else{
      setErrorCourse("")
     }
   }
   const handleSelectedBatchChange = (e) =>{
     const selectedBatchValue = e.target.value;
     setSelectedBatchOption(selectedBatchValue);
     if(selectedBatchValue == ""){
      setErrorBatch("*Please select a batch*");
     } else{
      setErrorBatch("")
     }
   }
    const handleInputChangeName =(event) =>{
     const inputName = event.target.value;
     setName(inputName);
     ValidationInputName(inputName);
    }
    const ValidationInputName = (inputName)=>{
      const nameRegex = /^[a-zA-Z ]+$/;
      setIsValidName(nameRegex.test(inputName));
    }
    const handleInputChangeEmail =(event) =>{
     const inputEmail = event.target.value;
     setEmail(inputEmail);
     ValidationInputEmail(inputEmail);
    }
    const ValidationInputEmail = (inputEmail) =>{
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setIsValidEmail(emailRegex.test(inputEmail))
    }
    const handleInputChangeNumber =(event) =>{
     const inputNumber = event.target.value;
     setNumber(inputNumber);
     ValidationInputNumber(inputNumber);
    }
    const ValidationInputNumber = (inputNumber) =>{
     const mobileNumberRegex = /^\d{10}/;
     setIsValidNumber(mobileNumberRegex.test(inputNumber));
   }
  return (
    <div>
      <div className="quick-enquiry-hidden-form">
            <form className="main-form">
                <div className="heading"><h1>Quick Enquiry</h1></div>
                <div className="name">
                    <input type="text" className="name" value={name} onChange={handleInputChangeName} placeholder="Name*" /><hr />
                    {!isValidName && <span style={{color:"red"}}>*Name is required*</span>}
                </div>
                <div className="email">
                    <input type="email" className="email" value={email} onChange={handleInputChangeEmail} placeholder="Email*" /><hr />
                    {!isValidEmail && <span style={{color:"red"}}>*Email is required*</span>}
                </div>
                <div className="number">
                <select className="section-option">
                    <option value="/">+91</option>
                    <option value="+44">+44</option>
                    <option value="+1">+1</option>
                    <option value="+20">+20</option>
                </select>
                <input type="number" className="number" value={number} onChange={handleInputChangeNumber}  id="number"/><hr />
                {!isValidNumber && <span style={{color:"red"}}>*Number is required*</span>}
                </div>
                <div className="select-branch">
                    <select id="select-branch" value={selectedOption} onChange={handleSelectedChange} >
                    {/* selected disabled hidden */}
                        <option value="">Select the branch*</option>
                        <option value="Velanchery">Velanchery</option>
                        <option value="Bangalore">Bangalore</option> 
                        <option value="Chennai">Chennai</option>  
                    </select><hr />
                    {error && <span style={{color:"red"}}>{error}</span>}
                </div>
                <div className="select-course">
                    <select id="select-course"value={selectedOptionCourse} onChange={handleSelectedCourseChange}>
                        <option >Select the course*</option>
                        <option value="Angular js">Angular js</option>
                        <option value="React.js">React.js</option>
                        <option value="Java">Java</option>  
                    </select><hr />
                    {errorCourse && <span style={{color:"red"}}>{errorCourse}</span>}
                </div>
                <div className="select-batch">
                    <select id="select-batch" value={selectedOptionBatch} onChange={handleSelectedBatchChange}>
                        <option >Select the batch*</option>
                        <option value="Immediately">Immediately</option>
                        <option value="In 2 weeks">In 2 weeks</option>
                        <option value="In a month">In a month</option>  
                    </select><hr />
                    {errorBatch &&<span style={{color:"red"}}>{errorBatch}</span>}
                </div>
                <div className="reCAPTCHA">
                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lfx0SoUAAAAABsmx…tLmNvbTo0NDM.&hl=en&v=0hCdE87LyjzAkFO5Ff-v7Hj1&size=normal&cb=eb075rcad7zn" width="304" height="78" role="presentation" name="a-2ggc8rr3v5qs" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"/>
                </div>
                <div className="submit-btn">
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EnquiryForm
