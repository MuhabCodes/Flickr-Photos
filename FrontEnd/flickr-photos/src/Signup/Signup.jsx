import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import background from './background.jpg';
import icon from './flickrlogo.png';

// Styles Added to The inputs
const CssTextField = withStyles({
  root: {
    margin: 10,
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
  const [lastName, setLName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  // const [passwordError, setpasswordError] = useState('');

  // validatePassword = () => {
  //   let passwordError = "";

  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

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
        <form onSubmit={() => history.push('/verifysignup')}>
          <CssTextField variant="outlined" style={{ justifyContent: 'center', alignSelf: 'center' }} required value={firstName} onChange={(e) => setFName(e.target.value)} label="First Name" />
          <CssTextField variant="outlined" required value={lastName} onChange={(e) => setLName(e.target.value)} label="Last Name" />
          <CssTextField variant="outlined" type="number" required value={age} onChange={(e) => setAge(e.target.value)} label="Your Age" />
          <CssTextField variant="outlined" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />
          <CssTextField variant="outlined" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />

          <Button
            variant="contained"
            style={{
              minWidth: 290,
              color: 'white',
              backgroundColor: '#128fdc',
              paddingTop: '0.5rem',
              marginTop: '1.8rem',
              font: 'inherit',
            }}
            disableElevation
            type="submit"
          >
            sign up
          </Button>
        </form>
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
