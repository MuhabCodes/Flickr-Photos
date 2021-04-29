import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import background from './background.jpg';
import icon from './flickrlogo.png';
import AppBar from './flickrbar';

// Styles Added to The inputs
const CssTextField = withStyles({
  root: {
    margin: 10,
  },
})(TextField);
// the card styles
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
  // the use of the use state and set state functions
  // to save the changes made in each of this inputs
  const [firstName, setFName] = useState('');

  function handleChange1(event) {
    setFName(event.target.value);
  }
  const [lastName, setLName] = useState('');

  function handleChange2(event) {
    setLName(event.target.value);
  }
  const [age, setAge] = useState('');

  function handleChange3(event) {
    setAge(event.target.value);
  }
  const [email, setEmail] = useState('');

  function handleChange4(event) {
    setEmail(event.target.value);
  }
  const [password, setPassword] = useState('');

  function handleChange5(event) {
    setPassword(event.target.value);
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
    // background image stylings
    }}
    >
      <div>{AppBar()}</div>
      <Card className={classes.root}>
        <img src={icon} style={{ width: '25%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
        <Typography className={classes.title} style={{ fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
          Sign up for Flickr
        </Typography>
        <CssTextField variant="outlined" required value={firstName} onChange={handleChange1} label="First Name" />
        <CssTextField variant="outlined" required value={lastName} onChange={handleChange2} label="Last Name" />
        <CssTextField variant="outlined" type="number" required value={age} onChange={handleChange3} label="Your Age" />
        <CssTextField variant="outlined" required value={email} onChange={handleChange4} label="Email Address" />
        <CssTextField variant="outlined" type="password" required value={password} onChange={handleChange5} label="Password" />

        <Button
          variant="contained"
          style={{
            color: 'white', backgroundColor: '#128fdc', paddingTop: '0.5rem', marginTop: '1.8rem', font: 'inherit',
          }}
          disableElevation
        >
          sign up
        </Button>

        <div style={{
          fontSize: '0.875rem', color: '#898989', position: 'relative', alignSelf: 'center', bottom: '-10px',
        }}
        >
          <p>
            By signing up, you agree with Flickr
            {'\''}
            s Terms of Services and Privacy Policy.
          </p>
        </div>
        <div style={{
          fontSize: '0.875rem', position: 'relative', alignSelf: 'center', bottom: '-25px',
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
