import React from 'react';
import PopCameras from './PopCameras';
import RankTable from './RankTable';
import Graphs from './Graphs';
import './CameraFinder.css';
import NavBar from '../App/Navbar';
import Footer from '../App/Footer';
// This .jsx will include the components that will make up the Camera Finder webpage
// The following function includes:
// returns the title and subtitles of the webpage
// returns the components that will make up the page:
// * The Most Popular Brands section which includes images, brand names and brand models
// * Graphs have been added
// * The Rank Table which includes all the brands and displays details such as
// Brand, Top Models, Model Types.
// This page is available to all kinds of users (logged or guests).

const CameraFinder = () => (
  <div className="camera-finder">
    <NavBar />
    <h1 id="title-cf">
      Camera Finder
    </h1>
    <h3 id="subtitle-mpb">
      Most Popular Brands
    </h3>
    {/* {error && <div>{error}</div>}
      {isLoading ? <div> Loading </div> : cameras && <PopCameras cameras={cameras} />} */}
    <PopCameras />
    <Graphs />
    <h3 id="subtitle-table">
      Camera Brands used in the Flickr Community
    </h3>
    <RankTable />
    <Footer />
  </div>
);
export default CameraFinder;
