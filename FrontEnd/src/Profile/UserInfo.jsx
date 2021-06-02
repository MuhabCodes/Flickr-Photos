import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import './UserInfo.css';

const UserInfo = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [joinedY, setJoinedY] = useState('');
  const [joinedM, setJoinedM] = useState('');
  const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  useEffect(() => {
    axios.get(`/Userinfo/${userjwt.sub}`, {
    }).then((resp) => {
      setLoading(false); // set loading to false as it is dont and fetched data
      setEmail(resp.data.email);
      setJoinedY(resp.data.Joined);
      setJoinedM(resp.data.JoinedMonth);
      return resp.data;
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        history.push('/login');
      } else {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
      }
    });
  }, []);
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
