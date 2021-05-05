import React, { useEffect, useState } from 'react';
import './CameraRoll.css';
import cameraRollContent from '../services/CameraRollContent';

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

  const sortedFromLatestToOledest = sortedDates.reverse();
  const content = sortedFromLatestToOledest.map((item) => (
    <div className="images">
      <h6>
        {item.monthTaken}
        {' '}
        {item.dayTaken}
        {', '}
        {item.yearTaken}

      </h6>
      <img key={item.photoId} src={item.imagePath} alt="" className="image-size" />
    </div>

  ));

  return (

    <>
      <div className="wrapper">

        {content}

      </div>
    </>
  );
}

export default CameraRoll;
