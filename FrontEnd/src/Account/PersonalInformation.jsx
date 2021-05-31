import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PersonalInformation.css';
import axios from 'axios';
import jwt from 'jwt-decode';
import SubNavBarPersonalInformation from './SubNavBarPersonalInformation';
import configData from '../config.json';

const PersonalInformation = () => {
  const [isLoading, setLoading] = useState(true);
  // For not rendering of text boxes until user info gets fetched
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhvc255QGdtYWlsLmNvbSIsImlhdCI6MTYyMjQ2MDc4MCwiZXhwIjoxNjIyNDY0MzgwLCJzdWIiOiI0In0.NzHVlXKnHST44YAvDEqVsUaRPdCWdCxcslXccSPcG2k',
  };
  // Headers for storing the token (Will be taken from local storage)
  const userjwt = jwt(headers.Authorization);
  const [ispro, setIsPro] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [displayname, setDisplayName] = useState('');
  const [avatar] = 'https://images.unsplash.com/photo-1584891800774-6f8c93265d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  useEffect(() => {
    axios(`${configData.SERVER_URL}/users/${userjwt.sub}`, {
      method: 'get',
      headers,
    }).then((resp) => {
      setLoading(false);
      setFirstName(resp.data.firstname);
      setLastName(resp.data.lastname);
      setDisplayName(resp.data.displayname);
      setIsPro(resp.data.ispro);
      setEmail(resp.data.email);
      return resp.data;
    });
  }, []);
  return (
    <div className="container-personal-information">
      <div className="container-sub-nav-bar-account-settings">
        <SubNavBarPersonalInformation />
      </div>
      {isLoading ? <div>Loading...</div> : (
        <div className="main-personal-info-container">
          <div className="personal-info-left-column">
            <div className="personal-information-box">
              <div className="personal-information-box-title">
                Membership Status
              </div>
              <div className="personal-information-box-content">
                {ispro ? (
                  <div className="personal-information-content-container">
                    <div className="logo-membership-status-div">
                      <p className="logo-membership-status-p">
                        5k
                      </p>
                    </div>
                    <div className="content-membership-status-divs">
                      <div className="content-membership-subtitle">
                        You have a Flickr Pro account.
                      </div>
                      <p className="content-membership-paragraph">
                        You get 5,000 of your favorite full-resolution photos and HD videos, shown
                        without ads.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="personal-information-content-container">
                    <div className="logo-membership-status-div">
                      <p className="logo-membership-status-p">
                        1k
                      </p>
                    </div>
                    <div className="content-membership-status-divs">
                      <div className="content-membership-subtitle">
                        You have a Flickr Free account.
                      </div>
                      <p className="content-membership-paragraph">
                        You get 1,000 of your favorite full-resolution photos and HD videos, shown
                        with ads.
                        {' '}
                        <Link to="/upgrade/pro">Upgrade to Pro</Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="personal-info-right-column">
            <div className="personal-information-box">
              <div className="personal-information-box-title">
                Account
              </div>
              <div className="personal-information-box-content">
                <div className="personal-information-content-container">
                  <div className="content-membership-status-divs">
                    <div className="content-personal-info-subtitle">
                      Login email
                    </div>
                    <p className="content-personal-information-paragraph">
                      { email }
                    </p>
                  </div>
                  <div className="content-membership-status-divs">
                    <div className="content-personal-info-subtitle">
                      Password
                    </div>
                    <p className="content-membership-paragraph">
                      <Link to="/change-password">Edit your password</Link>
                    </p>
                  </div>
                </div>
                <div className="content-personal-information-footer">
                  You can also
                  {' '}
                  <Link to="/account/delete">delete your flickr account</Link>
                </div>
              </div>
            </div>
            <div className="personal-information-box">
              <div className="personal-information-box-title">
                Profile
              </div>
              <div className="personal-information-box-content">
                <div className="personal-information-content-container">
                  <div className="personal-information-avatar-container">
                    <img src={avatar} alt="User Avatar" className="personal-information-avatar-img" />
                  </div>
                  <div className="content-membership-status-divs">
                    <p className="content-personal-information-paragraph">
                      Your real name is
                      {' '}
                      <b>{ firstname }</b>
                      {' '}
                      <b>{ lastname }</b>
                      .
                      {' '}
                      <Link to="/account/edit-profile">Change</Link>
                    </p>
                    <p className="content-personal-information-paragraph">
                      Your display name is
                      {' '}
                      <b>{ displayname }</b>
                      .
                      {' '}
                      <Link to="/account/edit-profile">Change</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PersonalInformation;
