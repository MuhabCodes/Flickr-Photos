import React, { useEffect, useState } from 'react';
import './CameraRoll.css';
import cameraRollContent from '../services/CameraRollContent';
// import NotFound from '../ErrorPages/NotFound';
import PopoutImageModel from './PopoutImageModel';

// this is the whole CameraRoll component
function CameraRoll() {
  const [photos, setphotos] = useState([]);
  const [showModel, setshowModel] = useState(false);
  const [images, setimage] = useState([]);
  useEffect(() => {
    const mounted = true;
    cameraRollContent()
      .then((items) => {
        if (mounted) {
          setphotos(items);
        }
      });
  }, []);

  function handleImageClick(image) {
    setshowModel(!showModel);
    setimage(image);
    console.log(images);
  }

  // this line split the code and arrange it according to taken date
  const sortedDates = photos.sort((a, b) => a.DateTaken.split('/').reverse().join().localeCompare(b.DateTaken.split('/').reverse().join()));

  // here it is arranged from latest to oldest
  const sortedFromLatestToOldest = sortedDates.reverse();

  // this function group images that have the same date to be rendered on the same div
  // and images with different dates are rendered on different divs
  const filtered = Object.values(sortedFromLatestToOldest.reduce((acc, val) => {
    const dateparts = val.DateTaken.split('/');
    const date = new Date(dateparts[2], dateparts[1], dateparts[0]);

    if (!acc[date]) acc[date] = [];
    acc[date].push(val);
    return acc;
  }, {}));

  // here we map through the array of array
  // first we render the common date of the array
  // then we render all of the images in this array that have the same day
  const days = filtered.map((day) => (
    <div>
      <h6>
        {day[0].monthTaken}
        {' '}
        {day[0].dayTaken}
        {', '}
        {day[0].yearTaken}
      </h6>
      {
        day.map((image) => (
          <div className="images">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <img key={image.photoId} src={image.imagePath} alt="" id="image-size" onClick={() => handleImageClick(image.imagePath)} onKeyDown={handleImageClick} />

            {/* this is the model that is shown when i want to have full screen image */}
            <div id="myModal" className="modal">
              <span className="close">&times;</span>
              <img className="modal-content" id="img01" alt="" />
            </div>

            <div className="expand" id="expand-icon">
              <button
                type="button"
                // this is the onclick function when clicking on the expand button to show the model
                onClick={() => {
                  // get the modal
                  const modal = document.getElementById('myModal');

                  // Get the image and insert it inside the modal

                  const modalImg = document.getElementById('img01');

                  modal.style.display = 'block';
                  modalImg.src = image.imagePath;

                  // Get the <span> element that closes the modal
                  const span = document.getElementsByClassName('close')[0];

                  // When the user clicks on <span> (x), close the modal
                  span.onclick = function close() {
                    modal.style.display = 'none';
                  };
                }}
              >
                <i className="fas fa-expand-alt" />
                {' '}
              </button>

            </div>
            <br />
            <br />

          </div>
        ))
      }
    </div>
  ));
  // get dates and render them on the side nav bar
  const sidebar = filtered.map((day) => (
    <div>
      <a href>{day[0].yearTaken}</a>
      <a href="action1">
        -
        {day[0].monthTaken}
      </a>
    </div>
  ));

  return (
    <div>

      <div className="main">
        <div className="sidenav">
          {sidebar}
        </div>
        {days}
        <a href="/followers">click me</a>
        {showModel ? <PopoutImageModel image={images} /> : null}

      </div>
    </div>
  );
}

export default CameraRoll;
