import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import msgicon from './msgicon.png';
import style from './verifySignupStyles';

const useStyles = makeStyles(style);

export default function VerifySignup() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.root}>
        <div>
          <img src={msgicon} className={classes.msgIcon} alt="icon" />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Check your inbox
          </Typography>
        </div>
        <p className={classes.sentParagraph}>
          We sent a verification link to `email` Please check
          your email for the next step.
        </p>
        <Button
          variant="contained"
          className={classes.resendButton}
          disableElevation
          type="submit"
        >
          Resend Email
        </Button>
        <p className={classes.paragraphStyle}>Can`t access your email?</p>

      </Card>
    </div>
  );
}
