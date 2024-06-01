

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPass from './employee/ForgotPass';
import Home from './views/Home/Home';
import { AdminSignUp } from './views/SignUp/SignUp';
import { EmployeeDashboard } from './views/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { AdminDashboard } from './views/Dashboard/Dashboard'; // Assuming you have an AdminDashboard component
import Landing from './views/Landing/Landing';

function App() {
  const [userType, setUserType] = useState(null); // Track user type ('employee' or 'admin')

  return (
    <BrowserRouter>
      <RoutesWrapper userType={userType} setUserType={setUserType} />
    </BrowserRouter>
  );
}

const RoutesWrapper = ({ userType, setUserType }) => {
  return (
    <>
      <Navbar userType={userType} /> {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/home" element={<Home setUserType={setUserType} />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/admin-sign-up" element={<AdminSignUp />} />
        <Route path="/emp-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} /> {/* Add Admin Dashboard route */}
        <Route  path='/'  element={<Landing/>} />
      </Routes>
    </>
  );
};

export default App;
