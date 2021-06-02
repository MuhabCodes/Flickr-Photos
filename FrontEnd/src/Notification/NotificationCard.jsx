import React from 'react';
import './NotificationCard.css';

function NotificationCard(prop) {
  const { notification } = prop;
  return (
    <div className="notification-container">
      { notification.map((item) => (
        <div className="notification-card-container" key={item.id}>
          <img src={item.imageUrl} alt="" className="notification-image" />
          <div className="notification-content">
            <h6 className="notification-details">{item.senderName}</h6>
            {item.act === 'like' ? <h6 className="notification-details">Liked your photo</h6> : <h6 className="notification-details"> commented on your photo</h6>}
          </div>
        </div>
      ))}

    </div>
  );
}

export default NotificationCard;
