/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import lockicon from './lockicon.png';
import style from './forgotpasswordStyles';

const CssTextField = withStyles({
  root: {
    minWidth: 305,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})(TextField);
const useStyles = makeStyles(style);
const schema = yup.object().shape({
  email: yup.string().email().required(),
});
/**
 * Function Signup to register on the site
 * @module
 * @function VerifySignup
 * @example <VerifySignup/>
 * @param {string} email - email to be verified
 * @param {object} submit - button to be clicked to handle the event
 * @return {null} a link sent to your mail to redirect you to change your password
 */

export default function VerifySignup() {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  // when the form is submitted to go to the send email page by react router dom
  const submitForm = () => {
    const UserInfo = {
      email,
    };
    axios('/auth/forgot-password', {
      baseURL: 'https://api.flick.photos',
      method: 'put',
      data: UserInfo,
    }).then((resp) => {
      history.push('/sendemail');
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.root}>
        <div>
          <img src={lockicon} className={classes.lockIcon} alt="icon" />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Forgot your Flickr password?
          </Typography>
        </div>
        <p style={{ fontSize: '1.0rem' }}>
          Please enter your email address below and
          we`ll send you instructions on how to reset your password.
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField error={errors.email} helperText={errors.email && 'Required'} variant="outlined" {...register('email')} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <Button
            variant="contained"
            className={classes.buttonStylings}
            disableElevation
            type="submit"
          >
            Send Email
          </Button>
        </form>
        <p className={classes.accessEmailParag}>Can`t access your email?</p>

      </Card>
    </div>
  );
}
