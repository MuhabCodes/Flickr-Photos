/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from './background.jpg';
import lockicon from './lockicon.png';

const CssTextField = withStyles({
  root: {
    // margin: 10,
    minWidth: 305,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})(TextField);
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 20,
    minWidth: '22rem',
    maxWidth: '22rem',
    height: '24rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    padding: 10,
    color: 'black',
  },
  pos: {
    marginBottom: 12,
  },
});
const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function VerifySignup() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = () => {
    // history.push('/verifysignup');
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
        <div>
          <img src={lockicon} style={{ width: '9%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
          <Typography className={classes.title} style={{ fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
            Forgot your Flickr password?
          </Typography>
        </div>
        <p style={{ fontSize: '1.0rem' }}>
          Please enter your email address below and
          we`ll send you instructions on how to reset your password.
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField variant="outlined" {...register('email')} name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <p style={{ color: 'red', fontSize: '12px', transition: '10s' }}>{errors.email && 'Required'}</p>
          <Button
            variant="contained"
            style={{
              minWidth: 290,
              color: 'white',
              backgroundColor: '#128fdc',
              paddingTop: '0.5rem',
              marginTop: '1.0rem',
            }}
            disableElevation
            type="submit"
          >
            Send Email
          </Button>
        </form>
        <p style={{ fontSize: '14px', position: 'relative', bottom: '-15px' }}>Can`t access your email?</p>

      </Card>
    </div>
  );
}
