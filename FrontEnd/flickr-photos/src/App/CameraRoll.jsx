import React, { useEffect, useState } from 'react';
import './CameraRoll.css';
import cameraRollContent from '../services/CameraRollContent';
import CameraRollNavbar from './CameraRollNavbar';

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
    <div className="sandy">
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
            <br />
            <br />

          </div>
        ))
      }
    </div>
  ));

  return (

    <>
      <div className="wrapper">
        <CameraRollNavbar />
        {days}

      </div>
    </>
  );
}

export default CameraRoll;
