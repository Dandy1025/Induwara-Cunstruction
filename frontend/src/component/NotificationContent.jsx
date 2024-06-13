import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const initialNotifications = [
      { id: 1, title: 'Dilum Jayarathna', message: 'Need 200 cement(Tokyo) on 25.07.2024', read: false },
      { id: 2, title: 'Unknown user', message: 'Need 5 cubes metal', read: false },
      { id: 3, title: 'NS Hardware', message: 'Needs materials. Call +94724536234', read: false },
    ];
    setNotifications(initialNotifications);
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const containerStyle = {
    marginTop: '60px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
  };

  const cardStyle = {
    marginBottom: '15px',
  };

  const cardBodyStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const btnStyle = {
    fontSize: '0.8rem',
    padding: '0.5rem 1rem',
    marginRight: '10px',
  };

  const iconBtnStyle = {
    fontSize: '1rem',
    color: 'red',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      
      <div className="container" style={containerStyle}>
        <h1 className="mb-4">Notifications</h1>
        {notifications.map(notification => (
          <div key={notification.id} className="card" style={cardStyle}>
            <div className="card-body" style={cardBodyStyle}>
              <div>
                <h5 className="card-title">{notification.title}</h5>
                <p className="card-text">{notification.message}</p>
              </div>
              <div>
                <button
                  className={`btn ${notification.read ? 'btn-secondary' : 'btn-primary'}`}
                  style={btnStyle}
                  onClick={() => markAsRead(notification.id)}
                  disabled={notification.read}
                >
                  {notification.read ? 'Read' : 'Mark as Read'}
                </button>
                <button
                  style={iconBtnStyle}
                  onClick={() => deleteNotification(notification.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Notification;
