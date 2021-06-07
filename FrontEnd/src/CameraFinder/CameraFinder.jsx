import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopCameras from './PopCameras';
import RankTable from './RankTable';
import Graphs from './Graphs';
import './CameraFinder.css';
import NavBar from '../App/Navbar';
import Footer from '../App/Footer';
// This .jsx will include the components that will make up the Camera Finder webpage
// The following function includes:
// 1- useState that will help us set our data fetched
// 2- useEffect function that will fetch the data from our server
// 3- returns the title and subtitles of the webpage
// 4- returns the components that will make up the page:
// * The Most Popular Brands section which includes images, brand names and brand models
// * Graphs have been added
// * The Rank Table which includes all the brands and displays details such as
// Brand, Top Models, Model Types.
// This page is available to all kinds of users (logged or guests).

const CameraFinder = () => {
  const [cameras, setPopCam] = useState([]); // sets the cameras fetched from the server
  // useEffect and axios used to make get request to fetch cameras' details
  useEffect(() => {
    axios.get('/cameras')
      .then((resp) => {
        setPopCam(resp.data);
      });
  }, []);
  return (
    <div className="camera-finder">
      <NavBar />
      <h1 id="title-cf">
        Camera Finder
      </h1>
      <h3 id="subtitle-mpb">
        Most Popular Brands
      </h3>
      {cameras && <PopCameras cameras={cameras} />}
      <Graphs />
      <h3 id="subtitle-table">
        Camera Brands used in the Flickr Community
      </h3>
      <RankTable />
      <Footer />
    </div>
  );
};
export default CameraFinder;
