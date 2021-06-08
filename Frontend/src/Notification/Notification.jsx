import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotificationCard from './NotificationCard';

function Notification() {
  const [notification, setnotification] = useState([]);
  useEffect(() => {
    axios.defaults.baseURL = 'http://api.flick.photos';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common.authorization = localStorage.getItem('token'); // Applying global default settings from axios
    axios.get('notifications/myNotification')
      .then((items) => {
        setnotification(items.data.myNotificationsarray);
      });
  }, []);
  console.log(notification);
  return (
    <div>
      <br />
      <NotificationCard notification={notification} />
    </div>
  );
}

export default Notification;
