import React from 'react';
import Button from '@material-ui/core/Button';
import './UpgradeToPro.css';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import graph1 from './graph1.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgrounColor: 'transparent',
    marginTop: '750px',
    fontSize: '16px',
  },
  paper2: {
    padding: theme.spacing(20),
    textAlign: 'center',
    marginTop: '750px',
    backgroundImage: `url(${graph1})`,
    backgroundRepeat: 'no-repeat',

  },
  h1: {
    fontSize: '26px',
  },
}));

export default function UpgradeToPro() {
  const classes = useStyles();
  const history = useHistory();
  const handleSubmit = () => {
    history.push('/GettingStarted');
  };
  return (
    <div>
      <div className="backgroundimg-uptopro">
        <p>
          flickr
          <span>pro</span>
        </p>
        <p className="first">Advanced stats, ad-free browsing, automatic photo uploads, and more.</p>
        <form onSubmit={handleSubmit}>
          <Button
            variant="contained"
            className="button"
            disableElevation
            type="submit"
          >
            Get Started
          </Button>
        </form>

      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {' '}
              <h1 className={classes.h1}>Advanced stats on your photos and videos</h1>
              Gain an understanding of how people are discovering your Flickr Photos.
              See which of your photos are trending now,
              and which have performed the best over the life of your Flickr Pro account.
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper2} />
          </Grid>
        </Grid>
      </div>
      {/* <div className="graph" /> */}
    </div>

  );
}
