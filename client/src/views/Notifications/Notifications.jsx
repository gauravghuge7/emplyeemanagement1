import { useState, useEffect } from 'react';
import './Notification.css'; // Import CSS for styling
import axios from 'axios';
import convertToSimpleDate from '../../components/Admin/TimeSetting/SetDate';

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

  console.log(notifications);

  return (
    <div className="notification-container relative w-full shadow-lg my-8 shadow-gray-600 rounded-lg p-8  ">
      <h2 className='font-bold text-2xl'>Admin Notifications</h2>
      <button className='absolute right-2 top-2' onClick={clearAllNotifications}>Clear All Notifications</button>
      <ul className='mt-4'>
        {notifications.map((notification, i) => (
          notification.leaveStatus !== 'approved' && notification.leaveStatus !== 'rejected' && (
            <li key={i} className='bg-slate-100 shadow-lg shadow-gray-400 rounded-xl p-8 my-8'>

              <h3 className='font-bold text-xl'>{notification.fullName}</h3>
              <h3>{notification.email}</h3>
              <p>{notification.reason}</p>
              <span> Start Date: {convertToSimpleDate(notification.startDate)}</span>

              <span> End Date: {convertToSimpleDate(notification.endDate)}</span>


              <div>
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
