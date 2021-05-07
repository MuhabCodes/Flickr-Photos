import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import AA from './TeamPhotos/AA.jpeg';
import AM from './TeamPhotos/AM.jfif';
import pp from './TeamPhotos/test.jpg';

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
          {/* About main */}
          <div id="about-main" className="col-md-auto ">
            <h1>About Flickr</h1>

            <h2 id="about-subtitle">
              Flickr - almost certainly the best online photo management and
              sharing application in the world - has
              {' '}
              <i>two main goals</i>
              :
            </h2>

            <blockquote>

              <h3>
                <b style={{ color: '#ff0084' }}>1.</b>
                {' '}
                We want to
                {' '}
                <b>help people make their photos available to the people who matter to them</b>
                .
              </h3>

              <p>
                Maybe they want to keep a blog of moments captured on their
                cameraphone, or maybe they want to show off their best pictures or
                video to the whole world in a bid for web celebrity. Or maybe they want to securely
                and privately share photos of their kids with their family across the country.
                Flickr makes all these things possible and more!
              </p>
              <p>
                To do this, we want to
                {' '}
                <b>get photos and video into and out of the system in as many ways as we can</b>
                : from the web, from mobile devices, from the users&apos; home computers and
                from whatever software they are using to manage their content.
                And we want to be able to push them out in as many ways as possible:
                on the Flickr website,
                in RSS feeds, by email, by posting to outside blogs
                or ways we haven&apos;t thought of yet.
                What else are we going to use those smart refrigerators for?
              </p>

              <h3>
                <b style={{ color: '#ff0084' }}>2.</b>
                {' '}
                We want to
                {' '}
                <b>enable new ways of organizing photos and video</b>
                .
              </h3>

              <p>
                Once you make the switch to digital,
                it is all too easy to get overwhelmed with the sheer
                number of photos you take or videos
                you shoot with that itchy trigger finger. Albums, the principal way
                people go about organizing things today,
                are great -- until you get to 20 or 30 or 50 of them.
                They worked in the days of getting rolls of film developed,
                but the &quot;album&quot; metaphor is in desperate need of a Florida condo
                and full retirement.
              </p>
              <p>
                Part of the solution is to make the process
                of organizing photos or videos collaborative.
                In Flickr, you can give your friends, family,
                and other contacts permission to organize
                your stuff - not just to add comments, but also notes and tags.
                People like to ooh and ahh,
                laugh and cry, make wisecracks when sharing photos and videos.
                Why not give them the ability to do
                this when they look at them over the internet?
                And as all this info accretes as metadata,
                you can find things so much easier later on, since all this info is also searchable.
              </p>
            </blockquote>

            <p>
              Flickr continues to evolve in myriad ways,
              all of which are designed to make it easier and better. Check out the
              {' '}
              <a href="https://blog.flickr.net/">Flickr Blog</a>
              {' '}
              to stay apprised of the latest developments.
              The fact that you&apos;ve read to the end of this entire document and
              are hanging out at the bottom of this page with nothing
              but this silly text to keep you company is proof of a deep and abiding interest
              on your part. What are you waiting for?
              <a href="../explore/"><b>Go explore!</b></a>
            </p>

            {/* Team members */}
            <h2 id="team">The Team</h2>
            <div className="container-fluid" id="team-table">
              <div className="row justify-content-start">
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Muhab" /></a>
                  <p>Muhab</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/">
                    <img src={pp} width="75" height="75" alt="Karim" />
                    {' '}
                  </a>
                  <p>Karim</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Yumna" /></a>
                  <p>Yumna</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={AA} width="75" height="75" alt="Ahmed Mostafa" /></a>
                  <p>Ahmed Mostafa</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/">
                    <img src={pp} width="75" height="75" alt="Manar" />
                    {' '}
                  </a>
                  <p>Manar</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={AM} width="75" height="75" alt="Ahmed Mahmoud" /></a>
                  <p>Ahmed Mahmoud</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Sandy" /></a>
                  <p>Sandy</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Mazen" /></a>
                  <p>Mazen</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Hosny" /></a>
                  <p>Hosny</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Yousef" /></a>
                  <p>Yousef</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Ahmed Ehab" /></a>
                  <p>Ahmed Ehab</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/">
                    <img src={pp} width="75" height="75" alt="Abdelrahman" />
                    {' '}
                  </a>
                  <p>Abdelrahman</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/">
                    <img src={pp} width="75" height="75" alt="George" />
                    {' '}
                  </a>
                  <p>George</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Mohamed" /></a>
                  <p>Mohamed</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Hannah" /></a>
                  <p>Hannah</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/">
                    <img src={pp} width="75" height="75" alt="Mostafa" />
                    {' '}
                  </a>
                  <p>Mostafa</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Mehrez" /></a>
                  <p>Mehrez</p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 text-center">
                  <a href="../photos/"><img src={pp} width="75" height="75" alt="Ziad" /></a>
                  <p>Ziad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default About;
