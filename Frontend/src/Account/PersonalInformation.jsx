import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PersonalInformation.css';
import axios from 'axios';
import jwt from 'jwt-decode';
import SubNavBarPersonalInformation from './SubNavBarPersonalInformation';

/**
 * Main Account Component has links to change password, edit user info and delete account
 * @namespace Account
 * @example <PersonalInformation />
 * @function PersonalInformation
 * @returns Page of user to manage account
 */

const PersonalInformation = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.authorization = localStorage.getItem('token'); // Applying global default settings from axios
  // For not rendering of text boxes until user info gets fetched
  // Headers for storing the token (Will be taken from local storage)
  const userjwt = jwt(localStorage.getItem('token'));
  const [ispro, setIsPro] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [displayname, setDisplayName] = useState('');
  const [avatar, setAvatar] = useState('');
  useEffect(() => {
    axios.get(`/people/${userjwt.userId}/info`, {
    }).then((resp) => {
      setLoading(false);
      setFirstName(resp.data.firstName);
      setLastName(resp.data.lastName);
      setDisplayName(resp.data.displayName);
      setIsPro(resp.data.isPro);
      setEmail(resp.data.email);
      setAvatar(resp.data.urlCover);
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        history.push('/login');
      } else {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        setTimeout(() => history.push('/login'), 100); // Redirect to Error page
      }
    });
  }, []);
  return (
    <div>
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
                          <Link to="/upgradetopro">Upgrade to Pro</Link>
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
                        <Link to="/change-password" id="link-to-edit-pw">Edit your password</Link>
                      </p>
                    </div>
                  </div>
                  <div className="content-personal-information-footer">
                    You can also
                    {' '}
                    <Link to="/account/delete" id="link-to-delete-account">delete your flickr account</Link>
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
    </div>
  );
};

export default PersonalInformation;
