/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import style from './loginStyles';
import icon from './flickrlogo.png';
import configData from '../config.json';

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
const schema = yup.object().shape({
  password: yup.string().min(12).required(),
  email: yup.string().email().required(),
});

export default function SignUp() {
  // the passing of the scheme using the useForm from the react hook library
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  // the use of the use state and set state functions
  // to save the changes made in each of this inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitForm = () => {
    const UserInfo = {
      email, password,
    };
    axios(`${configData.SERVER_URL}/login/`, {
      method: 'post',
      data: JSON.stringify(UserInfo),
    }).then((resp) => {
      console.log(resp.data);
      localStorage.setItem('token', resp.data.token);
    });
  };

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
          >
            sign in
          </Button>
        </form>
        <Link to="/forgotpassword" className={classes.linkStyle}>Forgot Password?</Link>
        <div style={{
          fontSize: '0.875rem', position: 'relative', alignSelf: 'center',
        }}
        >
          <p style={{ marginTop: '15px' }}>
            Not a Flickr member? Sign up here.
          </p>
        </div>

      </Card>
    </div>
  );
}
