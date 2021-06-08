import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const useStyles = makeStyles(() => ({
  ColorOfNavbar: {
    backgroundColor: 'rgb(0, 0, 0)',
  },
  IconPositionUp: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.6rem',
    paddingTop: '2px',
    marginLeft: '1rem',
    marginRight: '8rem',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Navbar collapseOnSelect sticky="top" expand="md" className={classes.ColorOfNavbar}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Brand className={classes.IconPositionUp} href="/">
        <img
          alt=""
          src="flickr.png"
          width="30"
          height="30"
        />
        {' '}
        flickr
      </Navbar.Brand>
    </Navbar>
  );
}
