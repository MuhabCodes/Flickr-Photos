/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import Button from '@material-ui/core/Button';
// import jwt from 'jwt-decode';
import axios from 'axios';
import './GettingStarted.css';
import { Typography } from '@material-ui/core';

const CssTextField = withStyles({
  root: {
    marginTop: '20px',
    marginLeft: '0px',
    justifyContent: 'center',
    alignSelf: 'center',
  },
})(TextField);
// const schema = yup.object().shape({
//   email: yup.string().email().required(),
// });
// const { register, handleSubmit, formState: { errors } } = useForm({
//   resolver: yupResolver(schema),
// });

export default function GettingStarted() {
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const [email, setEmail] = useState('');
  const getPro = () => {
    axios.defaults.headers.authorization = localStorage.getItem('token');
    axios('/user/pro', {
      baseURL: 'https://api.flick.photos',
      method: 'put',
    }).then((resp) => {
      <Typography>Check Your Mail</Typography>;
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <div className="backgroundimg-getting-started">
        <p>
          flickr
          <span>pro</span>
        </p>
        <Card className="card-root">
          <form>
            <CssTextField
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
            />
            <Button
            //   variant="contained"
              className="button"
              onClick={getPro}
              disableElevation
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </Card>
      </div>

    </div>
  );
}
