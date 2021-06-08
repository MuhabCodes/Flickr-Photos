import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import jwt from 'jwt-decode';
import './UserInfo.css';
/**
 * This component renders user's info which is email and join date
 * @component UserInfo
 * @function UserInfo
 * @example <UserInfo />
 * @returns user info container with data
 */
const UserInfo = () => {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  // const history = useHistory();
  const { userId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [joinedY, setJoinedY] = useState('');
  const [joinedM, setJoinedM] = useState('');
  // const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  useEffect(() => {
    if (userId) {
      axios.get(`/people/${userId}/info/`, {
      }).then((resp) => {
        setLoading(false); // set loading to false as it is dont and fetched data
        setEmail(resp.data.email);
        const month = new Date(resp.data.person.dateCreated);
        const year = new Date(resp.data.person.dateCreated);
        setJoinedM(month.toLocaleString('default', { month: 'long' }));
        setJoinedY(year.getFullYear());
        return resp.data;
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        // history.push('/login');
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        // setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
    }
  }, [userId]);
  return (
    <div className="user-info-uip">
      {!isLoading && (
      <div className="user-info-container-uip">
        <div className="info-view-container-uip" id="actual-info-uip">
          <ul className="userinfo-ul-style">
            <li className="userinfo-list-style">
              <span className="title-uip">Joined</span>
              <span className="user-data-uip">
                {' '}
                {joinedM}
                {' '}
                {joinedY}
              </span>
            </li>
            <li className="userinfo-list-style">
              <span className="title-uip">Email</span>
              <span className="user-data-uip">{email}</span>
            </li>
          </ul>
          <ul className="spacer" />
        </div>
        <div className="divider" />
      </div>
      )}
    </div>
  );
};

export default UserInfo;
