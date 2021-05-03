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
import background from './background.jpg';
import icon from './flickrlogo.png';

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
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: "center",
    marginTop: 20,
    padding: 10,
    minWidth: 360,
    maxWidth: 360,
    height: 720,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    padding: 20,
    color: 'black',
  },
  pos: {
    marginBottom: 12,
  },
});

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().min(12).required(),
  // age: yup.number().integer().positive().required(),
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
  // const [passwordError, setpasswordError] = useState('');

  // validatePassword = () => {
  //   let passwordError = "";

  // };
  const submitForm = () => {
    history.push('/verifysignup');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: '100vw',
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
    // background image stylings
    }}
    >
      <Card className={classes.root}>
        <img src={icon} style={{ width: '25%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
        <Typography className={classes.title} style={{ fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
          Sign up for Flickr
        </Typography>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField variant="outlined" {...register('firstName')} name="firstName" style={{ justifyContent: 'center', alignSelf: 'center' }} value={firstName} onChange={(e) => setFName(e.target.value)} label="First Name" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.firstName && 'Required'}</p>
          <CssTextField variant="outlined" {...register('lastName')} name="lastName" value={lastName} onChange={(e) => setLName(e.target.value)} label="Last Name" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.lastName && 'Required'}</p>
          <CssTextField variant="outlined" {...register('age')} name="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} label="Your Age" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.age && 'Required'}</p>
          <CssTextField variant="outlined" {...register('email')} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <span style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.email && 'Required'}</span>
          <CssTextField variant="outlined" {...register('password')} name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.password && 'Required Must be 12 Characters'}</p>
          <Button
            variant="contained"
            style={{
              minWidth: 290,
              color: 'white',
              backgroundColor: '#128fdc',
              paddingTop: '8px',
              marginTop: '8px',
              font: 'inherit',
            }}
            disableElevation
            type="submit"
          >
            sign up
          </Button>
        </form>
        <div style={{
          paddingTop: '8px',
          fontSize: '0.75rem',
          color: '#898989',
          position: 'relative',
          alignSelf: 'center',
        }}
        >

          <p>
            By signing up, you agree with Flickr
            {'\''}
            s Terms of Services and Privacy Policy.
          </p>
        </div>
        <div style={{
          fontSize: '0.875rem', position: 'relative', alignSelf: 'center',
        }}
        >
          <p>
            Already a Flickr member? Log in here
          </p>
        </div>

      </Card>
      {/* the stylings used to make the card and its components  */}
    </div>
  );
}
