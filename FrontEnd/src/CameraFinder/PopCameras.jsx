import React, { useEffect, useState } from 'react';
import './PopCameras.css';
import axios from 'axios';
// The PopCameras.jsx displays the Most popular brands section
// It fetches the top 3 ranked cameras and displays their images, brand names,
// and brand models.
// First, we introduce the cameras variable as props which holds the objects.
// Then, We use the slice function to get the first 3 brands and store them in cam.
// Finally, in the return statement, we use cam. map to fetch the details of each object and
// display them on the page.
// Note: when fetching topModels of a particular object, .map was used here because topModel
// is an array and so that I would be able to put comma between each element in this array.
const PopCameras = () => {
  const [cameras, setPopCam] = useState([]); // sets the cameras fetched from the server
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.Authorization = localStorage.getItem('token');
  // useEffect and axios used to make get request to fetch cameras' details
  useEffect(() => {
    axios.get('/cameras/brands')
      .then((resp) => {
        setLoading(false);
        setPopCam(resp.data.cameras);
        console.log(resp.data);
        return resp.data;
      }).catch((err) => {
        setError(err.response);
        console.log(err);
      });
  }, []);
  const cam = cameras.slice(0, 3);
  return (
    <div
      className="most-popular-cameras"
    >
      {error && <div>{error}</div>}
      {isLoading ? <div> Loading </div> : cam.map((camera) => (
        <div
          className="top-three"
          id="three"
        >
          <div id="images-collection">
            <img id="camera-images" src={camera.image} alt="best camera brands" />
          </div>
          <div id="brand-name-text">
            <h2
              id="brand-name"
            >
              <a className="brands-class" href="./brand">
                {camera.brand}
              </a>
            </h2>
          </div>
          <div id="brand-models-text">
            <p
              id="brand-models"
            >
              <ul className="ul-top-model">
                {camera.topModels.map((sub) => (
                  <a className="top-model-class" href="./topModel">
                    {sub}
                    ,
                  </a>
                ))}
                <a className="top-model-class" href="./topModel"> more...</a>
              </ul>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PopCameras;
