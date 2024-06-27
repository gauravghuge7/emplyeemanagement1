import { useState, useEffect } from 'react';
import './Notification.css'; // Import CSS for styling
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch notifications from an API (placeholder function)
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    // Placeholder data, replace with API call

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };


    const response = await axios.get("http://localhost:5200/api/v1/admin/getLeaveEmployee", config);

    console.log(response);

    const info = response.data.data;

    console.log(info);

    // info.map((item, i) => {
    //   console.log(item);

    // })

    const data = info;







    // const data = [
    //   { id: 1, title: 'New Employee Added', message: 'John Doe has been added.', date: '2024-06-01', isRead: false },
    //   { id: 2, title: 'Policy Update', message: 'The leave policy has been updated.', date: '2024-05-25', isRead: false },
    //   // Add more notifications as needed
    // ];
    const check = data.filter((item) => item.leaveStatus === 'pending');
    console.log(check.length)
    setCount(check.length);
    setNotifications(data);
  };

  const setApproveLeave = async (email, reason) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const body = {
      email: email,
      leaveStatus: 'approved',
      reason: reason
    };

    const response = await axios.post("http://localhost:5200/api/v1/admin/approveLeave", body, config);

    console.log(response);

    fetchNotifications();


  };


  const setRejectLeave = async (email, reason) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const body = {
      email: email,
      leaveStatus: 'rejected',
      reason: reason
    };

    const response = await axios.post("http://localhost:5200/api/v1/admin/approveLeave", body, config);

    console.log(response);

    fetchNotifications();

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
    <div className="dark dark:bg-black dark:text-white notification-container relative">
      <h2 className='font-bold text-2xl'>Admin Notifications</h2>
      <button className='absolute right-0 top-2' onClick={clearAllNotifications}>Clear All Notifications</button>
      <ul>
        {notifications.map((notification, i) => (
          notification.leaveStatus !== 'approved' && notification.leaveStatus !== 'rejected' && (
            <li className='dark:bg-black dark:text-white' key={i}>
              <h3>{notification.email}</h3>
              <p>{notification.reason}</p>
              <span>{notification.date}</span>
              <div className='dark:bg-black dark:text-white'>
                {!notification.isRead && <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>}
                <button onClick={() => deleteNotification(notification.id, notification.reason)}>Delete</button>
                <button onClick={() => setApproveLeave(notification.email, notification.reason)}>Approve</button>
                <button onClick={() => setRejectLeave(notification.email, notification.reason)}>Reject</button>
              </div>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
