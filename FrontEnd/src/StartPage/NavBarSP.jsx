import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
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
  button1: {
    padding: '5px 25px',
    fontSize: '14px',
    marginLeft: '8rem',
    marginRight: '0.5rem',
    color: 'inherit',
  },
  button2: {
    padding: '5px 25px',
    backgroundColor: 'white',
    fontSize: '14px',
    marginLeft: '0.5rem',
    color: 'inherit',
  },
}));

// component for the whole navigation bar
function NavBar() {
  const history = useHistory();
  const routeLogin = () => {
    history.push('/login');
  };
  const history1 = useHistory();
  const routeSignup = () => {
    history1.push('/signup');
  };
  const classes = useStyles();
  return (
    <Navbar collapseOnSelect sticky="top" expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Brand href="/">
        <img
          alt=""
          src="flickr.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        flickr
      </Navbar.Brand>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Photos, people, or groups"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button onClick={routeLogin} className={classes.button1}>Login</Button>
      <Button onClick={routeSignup} className={classes.button2}>SignUp</Button>

    </Navbar>
  );
}

export default NavBar;
