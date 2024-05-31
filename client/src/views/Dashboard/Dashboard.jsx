import { useState } from 'react';
import EmpProfile from '../EmployeeProfile/EmpProfile';
import EmpLeaveApplication from '../EmployeeProfile/EmpLeaveApplicatio';
import EmpDailyReport from '../EmployeeProfile/EmpDailyReport';
import Calendar from '../EmployeeProfile/Calender';
import Admin from '../../components/Dashboard/Admin';

export function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 text-center border-b">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <ul>
          <li 
            className={`p-4 cursor-pointer ${activeTab === 'profile' && 'bg-gray-200'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </li>
          <li 
            className={`p-4 cursor-pointer ${activeTab === 'leave' && 'bg-gray-200'}`}
            onClick={() => setActiveTab('leave')}
          >
            Application for Leave
          </li>
          <li 
            className={`p-4 cursor-pointer ${activeTab === 'report' && 'bg-gray-200'}`}
            onClick={() => setActiveTab('report')}
          >
            Daily Report
          </li>
          <li 
            className={`p-4 cursor-pointer ${activeTab === 'calendar' && 'bg-gray-200'}`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        {activeTab === 'profile' && <EmpProfile />}
        {activeTab === 'leave' && <EmpLeaveApplication />}
        {activeTab === 'report' && <EmpDailyReport />}
        {activeTab === 'calendar' && <Calendar />}
      </div>
    </div>
  );
}




export function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, Admin! Here you can manage your employees and view system statistics.</p>
      {/* Add your admin dashboard content here */}

      <Admin />
    </div>
  );
}


