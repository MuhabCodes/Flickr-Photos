import React from 'react';
import InstitutionsImage from './InstitutionsImage.JPG';
import './TheCommons.css';
import NavBar from '../App/Navbar';
import Footer from '../App/Footer';
// This .jsx is what makes up the commons static webpage, it is composed of 4 parts.
// The first part is an introductory block on the commons.
// The second part is about the commons-sampler.
// The third part is more information about the commons.
// The fourth part is a FAQ section.
// This webpage is available to all kinds of users whether logged in or logged out.
/**
 * This component displays the elements of The Commons webpage, including 4 sections: Introductory
 *  block on the commons,the commons-sampler, more about the commons and a FAQ section.
 * @component
 * @function TheCommons
 * @returns {null} - returns some texts and images.
 */
const TheCommons = () => (
  <div className="commons-full">
    <NavBar />
    <div className="the-commons-page">
      <div className="header">
        <img alt="" className="img-header" src="https://www.preusmuseum.no/var/plain_site/storage/images/media/images/commons_dolores2/26376-1-eng-GB/commons_dolores2.jpg" />
      </div>
      {/* This is the introductory section on the commons
      */}
      <h3 className="the-commons-title">Welcome!</h3>
      <div className="intro-contain">
        <div className="institutions">
          <div className="caption">
            <p className="sentence-for-inst">
              <b>A random sprinkling of our participating institutions...</b>
            </p>
          </div>
          <div className="image-of-inst">
            <img alt="" src={InstitutionsImage} />
          </div>
        </div>
        <div className="intro-block">
          <div className="intro-text1">
            <p className="intro-text-parag-norm">
              The key goal of The Commons is to share hidden treasures
              <br />
              from
              the world &apos;s public photography archives.
            </p>
          </div>
          <div className="intro-text2">
            <p className="intro-text-parag-bold">
              <b>
                Please help make the photographs you enjoy more
                <br />
                discoverable
                by adding tags and leaving comments. Your
                <br />
                contributions and
                knowledge make these photos even
                <br />
                richer*
              </b>
            </p>
          </div>
          <div className="list-of-links">
            <ul className="list-inst">
              <li className="participating-inst">
                <a href="./participatinginstitutes"> Participating Institutions </a>
              </li>
              <li className="faq">
                <a href="./faq"> FAQ </a>
              </li>
              <li className="rights-state">
                <a href="rights"> Rights Statement </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* This is the commons sampler section, where there are 3 photos and some text below each
      */}
      <div className="commons-sampler">
        <h3 className="commons-sampler-title">
          A Commons Sampler
        </h3>
        <div className="commons-sampler-container">
          <div className="commons-sample1">
            <img src="https://live.staticflickr.com/8542/8636135413_4aa4cd88e6_m.jpg" alt="" />
            <p className="sampler-text">
              <b> XXI OCTOBER MDCCCV</b>
              <br />
              from National Library of Ireland on The Commons
            </p>
          </div>
          <div className="commons-sample2">
            <img src="https://live.staticflickr.com/2807/9391940890_0ab87407f5_m.jpg" alt="" />
            <p className="sampler-text">
              <b>  Wash and brush-up for Loco 42… </b>
              <br />
              from National Library of Ireland on The Commons
            </p>
          </div>
          <div className="commons-sample2">
            <img src="https://live.staticflickr.com/65535/51047830258_87aca072db_m.jpg" alt="" />
            <p className="sampler-text">
              <b>Creels and wheels and Peelers... </b>
              <br />
              from National Library of Ireland on The Commons
            </p>
          </div>
        </div>
      </div>
      {/* This is section provides more information about the commons
      */}
      <div className="more-about-commons">
        <h3 className="more-title">More about The Commons</h3>
        <div className="more-about-commons-container">
          <div className="img-cap">
            <img src="https://combo.staticflickr.com/pw/images/en-us/commons_add_info.png" alt="" />
            <p className="caption">A new way to share photos on Flickr</p>
          </div>
          <div className="more-about-text">
            <p className="text-more">
              The Commons was launched on January 16 2008, when we released our pilot project
              <br />
              in partnership with The Library of Congress. Both Flickr and the Library were
              <br />
              overwhelmed
              by the positive response to the project! Thank you!
              <br />
              The program has two main objectives:
              <ol className="list-objec">
                <li className="point-one">
                  <b> To increase access </b>
                  {' '}
                  to publicly-held photography collections, and
                </li>
                <li className="point-two">
                  To provide a way for the general public to
                  {' '}
                  <b>
                    {' '}
                    contribute information
                    and knowledge.
                  </b>
                  <br />
                  (Then watch what happens when they do!)
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
      {/* This is a FAQ section abou the commons and their purpose
      */}
      <div className="frequently-asked-questions">
        <h3 className="faq-title"> FAQ</h3>
        <div className=" freq-asked-content">
          <div className="faq-container1">
            <p>
              <b>
                I work for a cultural heritage institution that would like to be a
                part of
                The Commons.
                How do we do that?
              </b>
              <br />
              Please let us know you&apos;re interested by registering here.
              It helps a lot if you let us know some background about your institution,
              and direct us to any online photo collections you already have.
            </p>
          </div>
          <div className="faq-container2">
            <p>
              <b>How can I get involved?</b>
              <br />
              We&apos;ve already seen fantastic contribution from the Flickr membership.
              Your tags and conversations about the content in The Commons has been wonderful!
              The best way to get involved is to add a tag or two to the photos you see,
              and if you happen to know anything else about the subject, by all means add a comment.
            </p>
          </div>
          <div className="faq-container3">
            <p>
              <b>
                {' '}
                What&apos;s &quot;no known copyright restrictions?&quot;
              </b>
              <br />
              This new rights statement is being contained to the institutions
              participating in The Commons,
              at the account level.
              It is a requirement for participation in the program that institutions may
              rightly claim &quot;no known copyright
              restrictions&quot; on the content
              they share.
              More information.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);
export default TheCommons;
