import React from 'react';
import InstitutionsImage from './InstitutionsImage.JPG';
import './TheCommons.css';
import NavBar from '../App/Navbar';

const TheCommons = () => (
  <div className="commons-full">
    <NavBar />
    <div className="the-commons-page">
      <div className="header">
        <img alt="" className="img-header" src="https://www.preusmuseum.no/var/plain_site/storage/images/media/images/commons_dolores2/26376-1-eng-GB/commons_dolores2.jpg" />
      </div>
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
    </div>
  </div>
);
export default TheCommons;
