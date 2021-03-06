/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
// import NavBarDropDown from './NavbarDropDown';
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '90ch',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  buttonLogin: {
    padding: '5px 25px',
    fontSize: '14px',
    marginLeft: '8rem',
    marginRight: '0.5rem',
    color: 'white',
  },
  buttonSignup: {
    padding: '5px 25px',
    backgroundColor: 'white',
    fontSize: '14px',
    marginLeft: '0.5rem',
    color: 'inherit',
  },
  navbarheader: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.6rem',
    paddingTop: '2px',
    marginLeft: '1rem',
    marginRight: '8rem',
  },
  navbarcolor: {
    backgroundColor: 'rgba(0, 0, 0, 0.164)',
  },
  positionIcon: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.6rem',
    paddingTop: '2px',
    marginLeft: '1rem',
    marginRight: '8rem',
  },
}));

// component for the whole navigation bar
function NavBar() {
  const historyLogin = useHistory();
  const routeLogin = () => {
    historyLogin.push('/login');
  };
  const historySignup = useHistory();
  const routeSignup = () => {
    historySignup.push('/signup');
  };
  const classes = useStyles();
  return (
    <Navbar collapseOnSelect sticky="top" expand="md" className={classes.navbarcolor}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Brand className={classes.positionIcon} href="/">
        <img
          alt=""
          src="flickr.png"
          width="30"
          height="30"
        />
        {' '}
        flickr
      </Navbar.Brand>
      <div>
        <a href="/Search" className=" droplink-main-nav">
          Search
          <img src="https://img.icons8.com/ios/20/ffffff/search--v1.png" alt="" />
        </a>
      </div>
      <Button onClick={routeLogin} className={classes.buttonLogin}>Login</Button>
      <Button onClick={routeSignup} className={classes.buttonSignup}>SignUp</Button>

    </Navbar>
  );
}

export default NavBar;
