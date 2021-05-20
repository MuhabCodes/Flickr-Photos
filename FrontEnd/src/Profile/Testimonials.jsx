import React from 'react';
import './Testimonials.css';
// import pic from './assets/logo192.png';

const TestimonialsArea = () => (
  <div className="testimonials-view-tp">
    <h4>Testimonials</h4>
    <div className="test-filter-bar-tp" />
    <div className="testimonials-container-tp">
      <div className="testimonials-list-tp">
        <p id="empty-testimmonials">Nobody has added a testimonial for you yet.</p>
      </div>
    </div>
  </div>
);

export default TestimonialsArea;
