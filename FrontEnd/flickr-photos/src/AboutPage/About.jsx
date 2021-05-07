import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return (
    <div id="about-page">
      <div className="container-fluid">
        <div id="about" className="row">
          {/* About sidebar */}
          <div id="about-sidebar" className="col-md-auto">
            <ul>
              <li><a href="../tour/">Take the tour</a></li>
              <li><a href="https://blog.flickr.net/">Flickr blog</a></li>
              <li><a href="../guidelines/">Community guidelines</a></li>
              <li><a href="../jobs/">Jobs</a></li>
            </ul>
            <p id="about-join">
              <a href="/SignUp/"><img src="https://combo.staticflickr.com/pw/images/tour/en-us/create-account-button.png" width="193" height="39" alt="Create Account" /></a>
              <a href="/signin/">or Sign In</a>
            </p>

            <h3>Need help?</h3>
            <p>
              <a href="../help/faq/">Visit our FAQ</a>
              <br />
              <a href="../help/">Get help by email</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
