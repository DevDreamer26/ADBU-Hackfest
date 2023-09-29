// Noti.js

import React, { useState } from 'react';
import './Noti.css';

function Noti() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Message',
      message: 'You have a new message from John Doe.',
      read: false,
    },
    {
      id: 2,
      title: 'Notification',
      message: 'This is a notification message.',
      read: true,
    },
    {
        id: 2,
        title: 'Notification',
        message: 'This is a notification message.',
        read: true,
      },
      {
        id: 2,
        title: 'Notification',
        message: 'This is a notification message.',
        read: true,
      },
      {
        id: 2,
        title: 'Notification',
        message: 'This is a notification message.',
        read: true,
      },
    // Add more notifications as needed
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      {notifications.map((notification) => (
        <div key={notification.id} className={`notification ${notification.read ? 'read' : ''}`}>
          <h3>{notification.title}</h3>
          <p>{notification.message}</p>
          <div className="button-container">
            {!notification.read && (
              <button className="button read-button" onClick={() => markAsRead(notification.id)}>
                Mark as Read
              </button>
            )}
            <button className="button delete-button" onClick={() => deleteNotification(notification.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noti;
