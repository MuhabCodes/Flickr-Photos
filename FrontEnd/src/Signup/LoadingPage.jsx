import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import axios from 'axios';
import loading from './loading.png';
import style from './LoadingPageStyles';

const useStyles = makeStyles(style);

export default function VerificationPage() {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const history = useHistory();
  const classes = useStyles();
  const { confirToken } = useParams();
  useEffect(() => {
    axios.post(`/auth/confirmation/${confirToken}`, {
    }).then(() => {
      history.push('/login');
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.root}>
        <div>
          <img src={loading} className={classes.LoadingIcon} alt="icon" />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Loading
          </Typography>
        </div>
        <p className={classes.sentParagraph}>
          Waiting for a verification response
        </p>
      </Card>
    </div>
  );
}
