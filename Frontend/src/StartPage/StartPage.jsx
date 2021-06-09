import React from 'react';
import './StartPageStyles.css';
import Backgroundslide from './BackgroundSlider';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';

export default function StartPage() {
  return (
    <div>
      <Backgroundslide />
      <div className="div-find-inspire">
        Find your inspiration.
      </div>
      <div className="div-join-flickr">
        {' '}
        Join the FlickPhotos community, home to tens of
        billions of photos and 2 million groups.
      </div>
    </div>

  );
}
