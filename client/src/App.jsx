
// // import { BrowserRouter,Routes,Route } from "react-router-dom"
// // import ForgotPass from "./employee/ForgotPass"
// // import Home from "./views/Home/Home"
// // import { AdminSignUp } from "./views/SignUp/SignUp"
// // import { EmployeeDashboard } from "./views/Dashboard/Dashboard"



// // function App() {
  

// //   return (
// //     <>
// //     <BrowserRouter>
    
// //       <Routes>
// //       <Route path="/" element={<Home/>} />
// //      <Route path="/forgot-password" element={<ForgotPass/>} />
// //      <Route path="/admin-sign-up" element={<AdminSignUp/>} />
// //      <Route path="/emp-dashboard" element={<EmployeeDashboard/>} />


// //       </Routes>
// //     </BrowserRouter>

// //     </>
// //   )
// // }

// // export default App



// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import ForgotPass from './employee/ForgotPass';
// import Home from './views/Home/Home';
// import { AdminSignUp } from './views/SignUp/SignUp';
// import { EmployeeDashboard } from './views/Dashboard/Dashboard';
// import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
// import { useState } from 'react';

// function App() {
//   const [userType, setUserType] = useState(null); // Track user type ('employee' or 'admin')

//   const location = useLocation();
//   const isLoginRoute = location.pathname === '/';

//   return (
//     <>
//       <BrowserRouter>
//         {!isLoginRoute && <Navbar userType={userType} />} {/* Conditionally render Navbar */}
//         <Routes>
//           <Route path="/" element={<Home setUserType={setUserType} />} />
//           <Route path="/forgot-password" element={<ForgotPass />} />
//           <Route path="/admin-sign-up" element={<AdminSignUp />} />
//           <Route path="/emp-dashboard" element={<EmployeeDashboard />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Add Admin Dashboard route */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

















import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPass from './employee/ForgotPass';
import Home from './views/Home/Home';
import { AdminSignUp } from './views/SignUp/SignUp';
import { EmployeeDashboard } from './views/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { AdminDashboard } from './views/Dashboard/Dashboard'; // Assuming you have an AdminDashboard component

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
        <Route path="/" element={<Home setUserType={setUserType} />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/admin-sign-up" element={<AdminSignUp />} />
        <Route path="/emp-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Add Admin Dashboard route */}
      </Routes>
    </>
  );
};

export default App;
