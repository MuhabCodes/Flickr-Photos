import React from 'react';
import './Testimonials.css';
// import pic from './assets/logo192.png';

const TestimonialsArea = () => (
  <div className="testimonials-view-tP">
    <h4>Testimonials</h4>
    <div className="test-filter-bar-tP" />
    <div className="testimonials-container-tP">
      <div className="testimonials-list-tP">
        <p id="empty-testimmonials">Nobody has added a testimonial for you yet.</p>
      </div>
    </div>
  </div>
);

export default TestimonialsArea;
