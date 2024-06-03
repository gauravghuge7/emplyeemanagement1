import  { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

function AdmLogin({setUserType}) {

    const [adminEmail, setAdminEmail] = useState("");
    const [adminId, setAdminId] = useState("");
    const [adminPassword, setAdminPassword] = useState("");


    const submitAdmin = (e) => {
        e.preventDefault();
        console.log("Admin Email:", adminEmail);
        console.log("Admin Password:", adminPassword);
        setUserType('admin');
        Navigate('/admin-dashboard');
      };




    return (
        <div>
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
              <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
            </div>
          </form>
        </div>
        
        </div>
    )
}

export default AdmLogin