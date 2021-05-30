/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './EditProfileInfo.css';
import axios from 'axios';
import jwt from 'jwt-decode';
import configData from '../config.json';
import useFetch from '../useFetch';

const EditPersonalInfo = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhvc255QGdtYWlsLmNvbSIsImlhdCI6MTYyMjQwNzM5MywiZXhwIjoxNjIyNDEwOTkzLCJzdWIiOiI0In0.S11D_MREkOLuViZc_v0b-wjSpKw1xSPAa128kHZn3mA',
  };
  const user = jwt(headers.Authorization);
  // Here we decode the jwt to get the sub property which is the userid
  const [firstname, setFirstName] = useState('Ahmed');
  const [lastname, setLastName] = useState('Mostafa');
  const [displayname, setDisplayName] = useState('ahmedmostafa');
  const [gender, setGender] = useState('Male');
  const handleSubmit = (e) => {
    e.preventDefault();
    const ProfileInfo = {
      firstname, lastname, displayname, gender,
    };
    axios(`${configData.SERVER_URL}/users/${user.sub}`, {
      method: 'patch',
      headers,
      data: JSON.stringify(ProfileInfo),
    }).then((resp) => {
      console.log(resp.data);
    });
  };
  return (
    <div className="edit-your-profile-main-container">
      <h1 className="edit-your-profile-title">
        <Link to="/account">
          Your account
        </Link>
        {' '}
        / Edit your profile
      </h1>
      <form onSubmit={handleSubmit} className="edit-profile-info-form">
        <h3 className="edit-your-profile-mini-form-header">Basic bits</h3>
        <div className="edit-basic-bits-container">
          <label htmlFor="edit-first-name-text-box" className="edit-your-profile-labels">
            <div className="edit-your-profile-label-text">
              First Name:
            </div>
            <input
              id="edit-first-name-text-box"
              className="edit-name-text-box"
              type="text"
              required
              value={firstname}
              placeholder={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="edit-last-name-text-box" className="edit-your-profile-labels">
            <div className="edit-your-profile-label-text">
              Last Name:
            </div>
            <input
              id="edit-last-name-text-box"
              className="edit-name-text-box"
              type="text"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="edit-display-name-text-box" className="edit-your-profile-labels">
            <div className="edit-your-profile-label-text">
              Display Name:
            </div>
            <input
              id="edit-display-name-text-box"
              className="edit-name-text-box"
              type="text"
              required
              value={displayname}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          {/* Here we start adding radio buttons for gender */}
          <div className="gender-radio-buttons-container">
            <h3 className="gender-title">Gender:</h3>
            <label htmlFor="edit-gender-male-radio" className="edit-your-profile-radio-labels">
              <input
                id="edit-gender-male-radio"
                className="edit-gender-radio"
                name="gender"
                type="radio"
                required
                value="Male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <div className="edit-your-profile-label-radio">
                Male
              </div>
            </label>
            <label htmlFor="edit-gender-female-radio" className="edit-your-profile-radio-labels">
              <input
                id="edit-gender-female-radio"
                className="edit-gender-radio"
                name="gender"
                type="radio"
                required
                value="Female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <div className="edit-your-profile-label-radio">
                Female
              </div>
            </label>
            <label htmlFor="edit-gender-rather-radio" className="edit-your-profile-radio-labels">
              <input
                id="edit-gender-rather-radio"
                className="edit-gender-radio"
                name="gender"
                type="radio"
                required
                value="Rather not say"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <div className="edit-your-profile-label-radio">
                Rather not say
              </div>
            </label>
          </div>
        </div>
        <button className="submit-profile-info" type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPersonalInfo;
