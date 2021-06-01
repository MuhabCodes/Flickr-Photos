import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './EditProfileInfo.css';
import axios from 'axios';
import jwt from 'jwt-decode';

const EditPersonalInfo = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  // For not rendering of text boxes until user info gets fetched
  const userjwt = jwt(localStorage.getItem('token'));
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [displayname, setDisplayName] = useState('');
  const [gender, setGender] = useState('');
  useEffect(() => {
    axios.get(`/users/${userjwt.sub}`)
      .then((resp) => {
        setLoading(false);
        setFirstName(resp.data.firstname);
        setLastName(resp.data.lastname);
        setDisplayName(resp.data.displayname);
        setGender(resp.data.gender);
        return resp.data;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          history.push('/login');
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ProfileInfo = {
      firstname, lastname, displayname, gender,
    };
    axios.patch(`/users/${userjwt.sub}`, ProfileInfo)
      .then(() => {
        history.push('/account');
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        } else if (error.response.status === 404) {
          setTimeout(() => history.push('*'), 2000); // Redirect to Error page
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
  };
  return (
    <div className="edit-your-profile-main-container">
      {isLoading ? <div>Loading...</div>
        : (
          <div className="main-edit-profile-after-loading">
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
        )}
    </div>
  );
};

export default EditPersonalInfo;
