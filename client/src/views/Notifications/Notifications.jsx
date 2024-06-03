import { useState, useEffect } from 'react';
import './Notification.css'; // Import CSS for styling

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [count,setCount] = useState(0);

  useEffect(() => {
    // Fetch notifications from an API (placeholder function)
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    // Placeholder data, replace with API call
    const data = [
      { id: 1, title: 'New Employee Added', message: 'John Doe has been added.', date: '2024-06-01', isRead: false },
      { id: 2, title: 'Policy Update', message: 'The leave policy has been updated.', date: '2024-05-25', isRead: false },
      // Add more notifications as needed
    ];
    setCount(data.length);
    setNotifications(data);
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-container relative">
      <h2 className='font-bold text-2xl'>Admin Notifications</h2>
      <button className='absolute right-0 top-2' onClick={clearAllNotifications}>Clear All Notifications</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className={notification.isRead ? 'read' : 'unread'}>
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
            <span>{notification.date}</span>
            <div>
              {!notification.isRead && <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>}
              <button onClick={() => deleteNotification(notification.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
