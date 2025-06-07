import React from 'react';
import './Style.css';

const StudentTestimonials = () => {
  return (
    <div>
      <div className="StudentTestimonialsContainer">
        <h1>Student Testimonials</h1>
        <div className="youtube-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GaBWL4Cz5So?si=o5hgySSP4guRdW80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="student-feedback">
        <i class="fa-solid fa-arrow-right"></i>
            <div className="carrousel">
            <div className="student1" id='student'>
                <div>
                <span className='l-logo'>P</span>
                    <h4> Preethi Krishnan</h4>
                     <span id='rating'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </span>
                </div>
                <p>"It was a good experience to learn Data science. Here a practical oriented approach teaching was provided. The trainer was very friendly and taught me all the topics in detail. All the doubts were cleared immediately. The training infrastructure was very good. Many practical example were given."</p>
            </div>
            <div className="student2" id='student'>
                <div>
                <span className='l-logo'>R</span>
                    <h4>Ranjani</h4>
                    <span id='rating'>
                    <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <p>"It was a good experience to learn Data science. Here a practical oriented approach teaching was provided. The trainer was very friendly and taught me all the topics in detail. All the doubts were cleared immediately. The training infrastructure was very good. Many practical example were given."</p>
            </div>
            <div className="student3" id='student'>
                <div>
                <span className='l-logo'>M</span>
                    <h4> Madhan</h4>
                    <span id='rating'>
                    <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <p>"It was a good experience to learn Data science. Here a practical oriented approach teaching was provided. The trainer was very friendly and taught me all the topics in detail. All the doubts were cleared immediately. The training infrastructure was very good. Many practical example were given."</p>
            </div>
            <div className="student4" id='student'>
                <div>
                <span className='l-logo'>T</span>
                    <h4>Tharani</h4>
                    <span id='rating'>
                    <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <p>"It was a good experience to learn Data science. Here a practical oriented approach teaching was provided. The trainer was very friendly and taught me all the topics in detail. All the doubts were cleared immediately. The training infrastructure was very good. Many practical example were given."</p>
            </div>
            <div className="student4" id='student'>
                <div>
                <span className='l-logo'>T</span>
                    <h4>Tharani</h4>
                    <span id='rating'>
                    <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <p>"It was a good experience to learn Data science. Here a practical oriented approach teaching was provided. The trainer was very friendly and taught me all the topics in detail. All the doubts were cleared immediately. The training infrastructure was very good. Many practical example were given."</p>
            </div>
            </div> 
            <i class="fa-solid fa-arrow-left"></i> 
        </div>
        <div className="more-details-btn">
            <button>For More Testimonials</button>
        </div>
      </div>
    </div>
  )
}

export default StudentTestimonials;
