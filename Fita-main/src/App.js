import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Enquire from './Components/Enquire';
import Footer from './Components/Footer';
import Details from './Components/Details';
import FitaAcademy from './Components/FitaAcademy';
import Features from './Components/Features';
import Accreditations from './Components/Accreditations';
import StudentTestimonials from './Components/StudentTestimonials';
import TopTrendingCourses from './Components/TopTrendingCourses';
import OurStudentsWorkAt from './Components/OurStudentsWorkat';
import Tutorials from './Components/Tutorials';
import MainFooter from './Components/MainFooter';


const App = () => {
  return (
    <div basename="/Fita" className='App'>
      <Header/>
      <Navbar/>
      <Enquire/>
      <Footer/>
      <Details/>
      <FitaAcademy/>
      <Features/>
      <Accreditations/>
      <StudentTestimonials/>
      <TopTrendingCourses/>
      <OurStudentsWorkAt/>
      <Tutorials/>
      <MainFooter/>
    </div>
  );
}
export default App;
