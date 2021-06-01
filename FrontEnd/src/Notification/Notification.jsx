import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotificationCard from './NotificationCard';

function Notification() {
  const [notification, setnotification] = useState([]);
  useEffect(() => {
    axios.get('Notification?reciever=1')
      .then((items) => {
        setnotification(items.data);
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
