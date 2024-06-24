import  { useState } from 'react'
import { toast } from "sonner";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function AdmLogin({loginType}) {

    const [adminEmail, setAdminEmail] = useState("");
    const [adminId, setAdminId] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    const navigate = useNavigate();



    const submitAdmin = async (e) => {
      e.preventDefault();
      console.log("Admin Email:", adminEmail);
      console.log("Admin Password:", adminPassword);
    
      const config = {
        headers: {
          "Content-Type": "application/json",
          },
          withCredentials: true,
      };
    
      const body = {
        email: adminEmail,
        password: adminPassword,
        adminId: adminId
      }
    
      try {
        const response = await axios.post('http://localhost:5200/api/v1/admin/login', body, config);
    
        console.log(response);
    
        const data = response.data;
    
        console.log(data);
    
        if (data.success === true) {
          toast.success("Admin Login Successful");
    
          navigate('/admin-dashboard');
        }
      } catch (error) {
        console.error("Login failed:", error);
        toast.error("Admin Login Failed. Please try again.");
      }
    };



  return (
    <div className='flex justify-center items-center'>
      {/* Admin Login Card */}

      <div className="lg:w-[400px] max-w-sm p-6 bg-white rounded-lg shadow-2xl border border-gray-300 ">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl border border-gray-300 ">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <form onSubmit={submitAdmin} method="POST">
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
            <h4 className="text-center mt-2 font-medium text-xl ">Or</h4>
            <div className="mt-4 text-center">
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdmLogin;
