import React, { useEffect, useState } from 'react';
import './CameraRoll.css';
import cameraRollContent from '../services/CameraRollContent';
// import CameraRollNavbar from './CameraRollNavbar';
// import CameraRollNavbar from './CameraRollNavbar';

function CameraRoll() {
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    const mounted = true;
    cameraRollContent()
      .then((items) => {
        if (mounted) {
          setphotos(items);
        }
      });
  }, []);
  // const [expandButton, setexpand] = useState(false);

  const sortedDates = photos.sort((a, b) => a.DateTaken.split('/').reverse().join().localeCompare(b.DateTaken.split('/').reverse().join()));

  const sortedFromLatestToOldest = sortedDates.reverse();
  const filtered = Object.values(sortedFromLatestToOldest.reduce((acc, val) => {
    const dateparts = val.DateTaken.split('/');
    const date = new Date(dateparts[2], dateparts[1], dateparts[0]);
    // console.log(date);
    if (!acc[date]) acc[date] = [];
    acc[date].push(val);
    return acc;
  }, {}));

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
            <img key={image.photoId} src={image.imagePath} alt="" id="image-size" />

            {/* // image large model */}
            <div id="myModal" className="modal">
              <span className="close">&times;</span>
              <img className="modal-content" id="img01" alt="" />
            </div>

            <div className="expand" id="expand-icon">
              <button
                type="button"
                onClick={() => {
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

      </div>

    </div>
  );
}

export default CameraRoll;
