import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import background from './background.jpg';
import icon from './flickrlogo.png';

const CssTextField = withStyles({
  root: {
    margin: 10,
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: "center",
    marginTop: 20,
    padding: 20,
    minWidth: 360,
    maxWidth: 360,
    height: 700,
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

export default function SignUp() {
  const classes = useStyles();
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
  });
  function handleChange(event) {
    setState(event.target.value);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: '100%',
      minHeight: '850px',
      backgroundRepeat: 'no-repeat',

    }}
    >
      <Card className={classes.root}>
        <img src={icon} style={{ width: '25%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
        <Typography className={classes.title} style={{ fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
          Sign up for Flickr
        </Typography>
        <CssTextField variant="outlined" required value={state.firstName} onChange={handleChange} label="First Name" />
        <CssTextField variant="outlined" required value={state.lastName} onChange={handleChange} label="Last Name" />
        <CssTextField variant="outlined" type="number" required value={state.age} onChange={handleChange} label="Your Age" />
        <CssTextField variant="outlined" required value={state.email} onChange={handleChange} label="Email Address" />
        <CssTextField variant="outlined" type="password" required value={state.password} onChange={handleChange} label="Password" />

        <Button
          variant="contained"
          style={{
            color: 'white', backgroundColor: '#128fdc', paddingTop: '0.5rem', marginTop: '1.8rem', font: 'inherit',
          }}
          disableElevation
        >
          sign up
        </Button>
      </Card>
    </div>
  );
}
