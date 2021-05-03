import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import icon from './flickrlogo.png';

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: 'black', minHeight: '7vh', maxHeight: '7vh' }}>
        <Toolbar>
          <img src={icon} style={{ width: '5vw' }} alt="icon" />
          <Typography
            id="typography"
            variant="h6"
            style={{
              textAlign: 'center',
              fontFamily: '"Zen Dots", cursive',
              lineHeight: ' 1.3',
              fontWeight: 'bold',
              fontSize: '28px',
            }}
          >
            flickr
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
