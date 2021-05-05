import React from 'react';
// The PopCameras.jsx displays the Most popular brands section
// It fetches the top 5 ranked camera from our json file and displays their images, brand names,
// and brand models.
// First, we introduce the cameras variable as props which holds the objects from json file.
// Then, We use the slice function to get the first 5 brands and store them in cam.
// Finally, in the return statement, we use cam. map to fetch the details of each object and
// display them on the page.

const PopCameras = (props) => {
  const came = props;
  const { cameras } = came;
  console.log(cameras);
  const cam = cameras.slice(0, 5);
  return (
    <div
      className="mostPopularCameras"
    >
      {cam.map((camera) => (
        <div
          className="topFive"
          id="five"
          key={camera.id}
        >
          <div id="imagesCollection">
            <img id="cameraImages" src={camera.image} alt="best camera brands" />
          </div>
          <div id="brandNameText">
            <h2
              id="brandName"
            >
              <a href="./brand">
                {camera.brand}
              </a>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PopCameras;
