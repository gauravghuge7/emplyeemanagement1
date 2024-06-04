
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../components/Footer/Footer';

// function Landing() {
//   const navigate = useNavigate();

//   const navigateToHome = () => {
//     navigate('/home');
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
//     <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Employee Management System</h1>
//     <div className="flex space-x-12">
//       <div onClick={navigateToHome} className="cursor-pointer max-w-sm p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
//         <img src="4782112.jpg" alt="Employee" className="w-full h-48 object-cover mb-4 rounded" />
//         <h2 className="text-2xl font-bold mb-2 text-gray-800">Employee</h2>
//         <p className="text-gray-700">Access your dashboard, view tasks, and manage your profile.</p>
//       </div>
//       <div  onClick={navigateToHome} className="max-w-sm p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
//         <img src="50426.jpg" alt="Admin" className="w-full h-48 object-cover mb-4 rounded" />
//         <h2 className="text-2xl font-bold mb-2 text-gray-800">Admin</h2>
//         <p className="text-gray-700">Manage employees, view reports, and configure system settings.</p>
//       </div>
//     </div>
//     <Footer/>

//   </div>
//   );
// }

// export default Landing;


import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


import { Link } from 'react-router-dom';


function Landing({ setUserType }) {





  const navigateToEmployeeLogin = () => {
    navigate('/');
  };

  const navigateToAdminLogin = () => {
    navigate('/');
  };


  return (
    <div className="min-h-screen pt-44  flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
      <h1 className="text-4xl  mb-24 text-white text-center font-semibold">Welcome to Employee Management System</h1>
      <div className="flex flex-wrap items-start justify-center gap-12  mb-12 transition-all">
        <div className="max-w-sm p-6  bg-white/50 backdrop-blur-lg rounded-lg shadow-xl hover:shadow-2xl duration-300 transform hover:-translate-y-1 cursor-pointer">
          <img src="4782112.jpg" alt="Employee" className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Employee</h2>
          <p className="text-gray-700">Access your dashboard, view tasks, and manage your profile.</p>
          <Link to={"/home"}>
            <button onClick={() => setUserType("employee")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Employee Login</button>
          </Link>
        </div>
        <div className="max-w-sm p-6 bg-white/50 backdrop-blur-lg rounded-lg shadow-xl hover:shadow-2xl  duration-300 transform hover:-translate-y-1 cursor-pointer">
          <img src="50426.jpg" alt="Admin" className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Admin</h2>
          <p className="text-gray-700">Manage employees, view reports, and configure system settings.</p>

          <Link to={"/home"}>
            <button onClick={() => setUserType("admin")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Admin Login</button>
          </Link>
        </div>
        <div className="max-w-sm p-6 bg-white/50 backdrop-blur-lg rounded-lg shadow-xl hover:shadow-2xl  duration-300 transform hover:-translate-y-1 cursor-pointer">
          <img src="20945868.jpg" alt="Tracking" className="w-full h-60 object-cover mb-4 rounded" />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Progress Tracking</h2>
          <p className="text-gray-700">Monitor employee progress and track performance metrics.</p>
        </div>
      </div>
      <div className="max-w-4xl  space-y-24  my-20 ">
        <div className='flex flex-wrap p-6 rounded-2xl bg-white/30 backdrop-blur-3xl lg:flex-nowrap justify-center  mx-20 lg:mx-0  '>
          <div>
            <h2 className="text-3xl font-bold mb-4  ">How We Track Employee Progress</h2>
            <p className="mb-6 text-balance">Our system provides detailed performance metrics and progress tracking tools to help employees stay on track with their goals. We utilize a variety of key performance indicators (KPIs) to measure productivity, task completion rates, and overall efficiency.</p>
          </div>
          <img src="3661720.jpg" alt="Progress Tracking" className="w-80 h-64 object-cover rounded-lg" />
        </div>
        <div className='flex flex-wrap lg:flex-nowrap bg-white/30 backdrop-blur-3xl p-6 rounded-2xl justify-center gap-8 mx-20 lg:mx-0 '>
          <div>
            <h2 className="text-3xl font-bold mb-4">Admin Features</h2>
            <p className="mb-6">Admins have access to comprehensive tools for managing employee data, generating reports, and configuring system settings. With real-time data and analytics, admins can make informed decisions to optimize workforce performance.</p>
          </div>
          <img src="20616.jpg" alt="Admin Features" className="w-72 h-64 object-cover mb-6 rounded-lg" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { Landing };






export function Foooter() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-2 lg:px-1">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-300 flex flex-col items-center lg:items-start">
            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
            <p className="mt-6 max-w-sm text-gray-400 text-center lg:text-left">Empowering businesses with a streamlined employee management experience.</p>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex-1 lg:grid lg:grid-cols-2 lg:gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-gray-200 font-bold">Company</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-bold">Support</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-400 text-center lg:text-left">
          &copy; 2024 Employee Management System. All rights reserved.
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
        <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Employee Management System</h1>
        <div className="flex space-x-12">


          <Link to={"/home"}>
            <div
              onClick={() => setUserType("employee")}

              className="cursor-pointer max-w-sm p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="4782112.jpg" alt="Employee" className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Employee</h2>
              <p className="text-gray-700">Access your dashboard, view tasks, and manage your profile.</p>
            </div>
          </Link>


          <Link to={"/home"}>
            <div
              onClick={() => setUserType("admin")}


              className="max-w-sm p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="50426.jpg" alt="Admin" className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Admin</h2>
              <p className="text-gray-700">Manage employees, view reports, and configure system settings.</p>
            </div>
          </Link>
        </div>

      </div>
    </footer>
  );
}

