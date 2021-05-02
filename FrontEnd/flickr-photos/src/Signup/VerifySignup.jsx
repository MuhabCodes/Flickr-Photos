import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import background from './background.jpg';
import msgicon from './msgicon.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 20,
    minWidth: '22rem',
    maxWidth: '22rem',
    height: '18rem',
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

export default function VerifySignup() {
  const classes = useStyles();

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
      <Card className={classes.root}>
        <div>
          <img src={msgicon} style={{ width: '9%', justifyContent: 'center', alignSelf: 'center' }} alt="icon" />
          <Typography className={classes.title} style={{ fontSize: '1.25rem' }} color="textSecondary" gutterBottom>
            Check your inbox
          </Typography>
        </div>
        <p style={{ fontSize: '1.0rem' }}>
          We sent a verification link to `email` Please check
          your email for the next step.
        </p>
        <Button
          variant="contained"
          style={{
            minWidth: 290,
            color: 'white',
            backgroundColor: '#128fdc',
            paddingTop: '0.5rem',
            marginTop: '1.8rem',
          }}
          disableElevation
          type="submit"
        >
          Resend Email
        </Button>
        <p style={{ position: 'relative', bottom: '-10px' }}>Can`t access your email?</p>

      </Card>
    </div>
  );
}
