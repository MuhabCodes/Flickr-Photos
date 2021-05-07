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
// import background from './background.jpg';
import icon from './flickrlogo.png';
import style from './signupStyles';

// Styles Added to The inputs
const CssTextField = withStyles({
  root: {
    // margin: 10,
    minWidth: 305,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})(TextField);
// the card styles
const useStyles = makeStyles(style);

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().min(12).required(),
  // age: yup.required,
  email: yup.string().email().required(),
});

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  // the use of the use state and set state functions
  // to save the changes made in each of this inputs
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const submitForm = () => {
    history.push('/verifysignup');
  };

  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.root}>
        <img src={icon} style={{ width: '25%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
        <Typography className={classes.title} style={{ fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
          Sign up for Flickr
        </Typography>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField error={errors.lastName} helperText={errors.firstName && 'Required'} variant="outlined" {...register('firstName')} name="firstName" style={{ marginBottom: '10px' }} value={firstName} onChange={(e) => setFName(e.target.value)} label="First Name" />
          <CssTextField error={errors.lastName} helperText={errors.lastName && 'Required'} variant="outlined" {...register('lastName')} name="lastName" style={{ marginBottom: '10px' }} value={lastName} onChange={(e) => setLName(e.target.value)} label="Last Name" />
          <CssTextField error={errors.lastName} helperText={errors.lastName && 'Required'} variant="outlined" {...register('age')} name="Age" type="number" style={{ marginBottom: '10px' }} value={age} onChange={(e) => setAge(e.target.value)} label="Your Age" />
          <CssTextField error={errors.email} helperText={errors.email && 'Required'} variant="outlined" {...register('email')} name="email" type="email" style={{ marginBottom: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <CssTextField error={errors.password} helperText={errors.password && 'Required'} variant="outlined" {...register('password')} name="password" type="password" style={{ marginBottom: '10px' }} value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
          <Button
            variant="contained"
            className={classes.signUpButton}
            disableElevation
            type="submit"
          >
            sign up
          </Button>
        </form>
        <div className={classes.policiesDiv}>
          <p>
            By signing up, you agree with Flickr
            {'\''}
            s Terms of Services and Privacy Policy.
          </p>
        </div>
        <div className={classes.alreadymemberDiv}>
          <p>
            Already a Flickr member? Log in here
          </p>
        </div>

      </Card>
      {/* the stylings used to make the card and its components  */}
    </div>
  );
}
