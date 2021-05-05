import React, { useEffect, useState } from 'react';
// This .jsx will include the components that will make up the Camera Finder webpage
// The following function includes:
// 1- useState that will help us set our data fetched
// 2- useEffect function that will fetch the data from our json file
// 3- returns the title and subtitles of the webpage
// 4- returns the components that will make up the page:

const CameraFinder = () => {
  const [cameras, setPopCam] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/cameras')
      .then((res) => res.json())
      .then((data) => {
        setPopCam(data);
      })
      .catch((rejected) => {
        console.log(rejected);
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
    </div>
  );
};
export default CameraFinder;
