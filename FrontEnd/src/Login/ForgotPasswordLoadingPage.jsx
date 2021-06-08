/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import loading from './loading.png';
import style from './forgotpasswordStyles';

const CssTextField = withStyles({
  root: {
    minWidth: 305,
    justifyContent: 'center',
    alignSelf: 'center',
  },
})(TextField);
const useStyles = makeStyles(style);
const schema = yup.object().shape({
  password: yup.string().min(5).required(),
});

export default function ForgotPasswordVerification() {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { resetToken } = useParams();
  const submitForm = () => {
    // history.push('/verifysignup');
    const UserInfo = {
      password,
    };
    axios(`/auth/forgot-password/${resetToken}`, {
      baseURL: 'https://api.flick.photos',
      method: 'put',
      data: UserInfo,
    }).then((resp) => {
      console.log(resp.data);
      history.push('/login');
    });
  };
  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.rootloadingpage}>
        <div>
          <img src={loading} className={classes.LoadingIcon} alt="icon" />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Enter New Password
          </Typography>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <CssTextField error={errors.password} helperText={errors.password && 'Required'} variant="outlined" {...register('password')} name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="New Password" />
          <Button
            variant="contained"
            className={classes.buttonStylings}
            disableElevation
            type="submit"
          >
            Confirm
          </Button>
        </form>
      </Card>
    </div>
  );
}
