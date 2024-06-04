
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
import { HelpAndSupport } from './components/HelpAndSupport/HelpAndSupport';


function App() {

  const [userType, setUserType] = useState("employee"); // Track user type ('employee' or 'admin')
  
  const [loginType, setLoginType] = useState("employee"); // Track user type ('employee' or 'admin')

  return (
    <BrowserRouter>
      <RoutesWrapper userType={userType} setUserType={setUserType} setLoginType={setLoginType} loginType={loginType} />
    </BrowserRouter>
  );
}

const RoutesWrapper = ({ userType, setUserType, setLoginType, loginType }) => {
  return (
    <AdminContextProvider>
    
      <Navbar userType={userType} setUserType={setUserType} /> {/* Conditionally render Navbar */}
      <Routes>
<<<<<<< HEAD
      <Route path='/' element={<Landing setLoginType={setLoginType}/> } />

        <Route path="/home" element={<Home loginType={loginType} />} />
=======
      
      <Route path='/' element={<Landing setUserType={setUserType}/> } />
        <Route path="/home" element={<Home userType={userType} />} />
>>>>>>> 09c9516a01a29834fc61578e67c919654c8009f6
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/emp-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} /> {/* Add Admin Dashboard route */}
      
        <Route path='/support' element={<HelpAndSupport/>} />
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
