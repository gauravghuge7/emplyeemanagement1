

import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Home({setUserType}) {
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const [employeePassword, setEmployeePassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const submitEmployee = (e) => {
    e.preventDefault();
    console.log("Employee Email:", employeeEmail);
    console.log("Employee Password:", employeePassword);
    setUserType('employee');
    navigate('/emp-dashboard');
  };

  const submitAdmin = (e) => {
    e.preventDefault();
    console.log("Admin Email:", adminEmail);
    console.log("Admin Password:", adminPassword);
    setUserType('admin');
    navigate('/admin-dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-2xl border border-gray-300">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Employee Management System</h1>
        <p className="text-center mb-8 text-gray-700">
          Our system helps you manage employee information, track performance, and streamline HR processes.
        </p>
        
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Employee Login Card */}
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl border border-gray-300">
            <h2 className="text-2xl font-bold text-center mb-6">Employee Login</h2>
            <form onSubmit={submitEmployee}>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  value={employeeEmail}
                  onChange={(e) => setEmployeeEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-blue-700"
                />
                <label className="block text-gray-700 mt-3">Employee Id:</label>
                <input
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-blue-700"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  value={employeePassword}
                  onChange={(e) => setEmployeePassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
              <div className="mt-4 text-center">
                <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
              </div>
            </form>
          </div>
          {/* Admin Login Card */}
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl border border-gray-300">
            <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
            <form onSubmit={submitAdmin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-blue-700"
                />
                <label className="block text-gray-700 mt-3">Admin Id:</label>
                <input
                  type="text"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:ring-blue-700"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
              <h4 className='text-center mt-2 font-medium text-xl '>Or</h4>
              <div className="mt-4 text-center">
                <Link to="/admin-sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-700">"Empowering your workforce, one login at a time."</p>
          <p className="text-gray-700 mt-2">Need help? <Link to="/support" className="text-blue-500 hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
