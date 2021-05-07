import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import icon from './flickrlogo.png';
import style from './flickrbarStyles';

const useStyles = makeStyles(style);

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={icon} className={classes.flickrIcon} alt="icon" />
          <Typography
            id="typography"
            variant="h6"
            className={classes.textStyles}
          >
            flickr
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
