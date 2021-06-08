/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import firebase from 'firebase/app';
import jwt from 'jwt-decode';
import style from './loginStyles';
import icon from './flickrlogo.png';
// import configData from '../config.json';
// import FBlogin from './firebaselogin2';

import('firebase/messaging');
import('firebase/database');

// Styles Added to The inputs
const CssTextField = withStyles({
  root: {
    marginLeft: 20,
    marginBottom: '10px',
    minWidth: 305,
    justifyContent: 'center',
  },
})(TextField);
// the card styles
const useStyles = makeStyles(style);

// the schema of the inputs needed to be validated
/**
 * Function Login to enter the site
 * @component
 * @function schema
 * @example <schema/>
 * @param {string} email - Email needed from the user to sign in
 * @param {string} password - the correct password needed
 * @returns {null} - validate the data given according to a given criteria
 */
const schema = yup.object().shape({
  password: yup.string().min(5).required(),
  email: yup.string().email().required(),
});
/**
 * Function Login to enter the site
 * @component
 * @function FBlogin
 * @example <FBlogin/>
 * @param {string} token - token to be sent to the firebase
 * @returns {null} - token used to know whether user is logged in/out
 */
const FBlogin = async () => {
  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
  console.log(FIREBASE_DATABASE);
  // so starting here the next steps which is getting token && saving token
  await FIREBASE_MESSAGING.getToken()
    .then((token) => {
      const userjwt = jwt(localStorage.getItem('token'));
      localStorage.setItem('firebase', `${token}`);
      console.log('token to be save', token);
      // saving token in database
      FIREBASE_DATABASE.ref('/tokens').push({
        token,
        userId: userjwt.userId,
      });
    });
};

/**
 * Function Login to enter the site
 * @module
 * @function Login
 * @example <Login/>
 * @param {string} email - Email needed from the user to sign in
 * @param {string} password - the correct password needed
 * @returns {string} token - returns back a token to beidentify the user to display his data
 */
export default function Login() {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  // the passing of the scheme using the useForm from the react hook library
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  // the use of the use state and set state functions
  // to save the changes made in each of this inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  /**
 * Function Login to enter the site
 * @component
 * @function submitForm
 * @example <submitForm/>
 * @param {string} email - Email needed from the user to sign in
 * @param {string} password - the correct password needed
 * @returns {null} - send data to server,to use it for notifications if they are valid
 */
  const submitForm = () => {
    const UserInfo = {
      email, password,
    };
    axios('/auth/login', {
      method: 'post',
      data: UserInfo,
    }).then((resp) => {
      console.log(resp.data);
      // FBlogin();
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          // so he allowed us to send notification to browser
          // so starting here the next steps which is getting token && saving token
          console.log('granted');
          FBlogin();
        } else {
          console.log('User didnt give permission');
        }
      });
      localStorage.setItem('token', `${resp.data.token}`);
      // console.log('token');
      history.push('/');
    });
  };
  // console.log(email);
  // console.log(password);
  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.root}>
        <img src={icon} className={classes.cardIcon} alt="icon" />
        <Typography className={classes.title} style={{}} color="textSecondary" gutterBottom>
          Log in to Flickr
        </Typography>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField error={errors.email} helperText={errors.email && 'Required'} variant="outlined" {...register('email')} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <CssTextField error={errors.password} helperText={errors.password && 'Required'} variant="outlined" {...register('password')} name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
          <Button
            variant="contained"
            className={classes.loginButton}
            disableElevation
            type="submit"
            id="login-btn"
          >
            sign in
          </Button>
        </form>
        <Link to="/forgotpassword" className={classes.linkStyle}>Forgot Password?</Link>
        <div style={{
          fontSize: '0.875rem',
          position: 'relative',
          alignSelf: 'center',
        }}
        >
          <p style={{ marginTop: '15px' }}>
            Not a Flickr member?
            {' '}
            <Link to="/signup">
              Sign up here.
            </Link>
          </p>
        </div>

      </Card>
    </div>
  );
}
