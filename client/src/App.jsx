

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPass from './employee/ForgotPass';
import Home from './views/Home/Home';
import {  SignUp } from './views/SignUp/SignUp';
import { EmployeeDashboard } from './views/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { AdminDashboard } from './views/Dashboard/Dashboard'; // Assuming you have an AdminDashboard component
import {Landing} from './views/Landing/Landing';
import Leave from './views/Leave/Leave';
import Task, { AddTask } from './components/task/Task';
import AdminProfile from './views/AdminProfile/AdminProfile';
import AdminContextProvider from './Context/AdminContextProvider';
import AdminForm from './views/Admin/AdminForm';
import Register from './views/Register/Register';

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
    <AdminContextProvider>
      <Navbar userType={userType} /> {/* Conditionally render Navbar */}
      <Routes>
      <Route path='/' element={<Landing setUserType={setUserType}/> } />
        <Route path="/home" element={<Home userType={userType} />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/emp-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} /> {/* Add Admin Dashboard route */}
      
      
        <Route path="/leave" element={<Leave />} />

        <Route path="/task" element={<Task />} />
        <Route path="/addtask" element={<AddTask />} />


        <Route path="/emp-profile" element={<AdminProfile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/form" element={<AdminForm />} />


        <Route path="/register" element={<Register />} />






      
      
        </Routes>
    </AdminContextProvider>
  );
};

export default App;
