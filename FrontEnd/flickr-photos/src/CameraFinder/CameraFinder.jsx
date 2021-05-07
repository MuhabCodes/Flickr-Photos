import React, { useEffect, useState } from 'react';
import PopCameras from './PopCameras';
import RankTable from './RankTable';
import Graphs from './Graphs';
import './CameraFinder.css';
// This .jsx will include the components that will make up the Camera Finder webpage
// The following function includes:
// 1- useState that will help us set our data fetched
// 2- useEffect function that will fetch the data from our json file
// 3- returns the title and subtitles of the webpage
// 4- returns the components that will make up the page:
// * The Most Popular Brands section which includes images, brand names and brand models
// * Graphs have been added
// * The Rank Table which includes all the brands in the .json and displays details such as
// Rank, Brand, Top Models, Model Types, and # of Models.

const CameraFinder = () => {
  const [cameras, setPopCam] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/cameras')
      .then((res) => res.json())
      .then((data) => {
        setPopCam(data);
      });
  }, []);
  return (
    <div className="cameraFinder">
      <h1 id="title">
        Camera Finder
      </h1>
      <h3 id="subtitle">
        Most Popular Brands
      </h3>
      {cameras && <PopCameras cameras={cameras} />}
      <Graphs />
      <h3 id="subtitleForTable">
        Camera Brands used in the Flickr Community
      </h3>
      <RankTable />
    </div>
  );
};
export default CameraFinder;
