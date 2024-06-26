import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Admin/Footer/Footer';
import digitalbusiness from '../../../public/digital-business-organizer-for-time-management1@2x.png';
import planner from '../../../public/planner-calendar-for-time-management@2x.png';
import tastmanagement from '../../../public/task-management-system-for-productivity@2x.png';
import laptop from '../../../public/agile-management-system-on-laptop@2x.png';
import rectangle from '../../../public/rectangle-29.svg';
import businessAnalytics from '../../../public/business-analytics-on-tablet-screen@2x.png';
import womentplanning from '../../../public/woman-planning-on-a-calendar@2x.png';
import dashboard from '../../../public/dashboard@2x.png';
import Eclipse from '../../components/Eclipse'
import { motion } from 'framer-motion'
import { useInView } from "framer-motion"

import { Link } from 'react-router-dom';
import { duration } from '@mui/material';
import { useEffect, useRef } from 'react';

function Landing({ setLoginType }) {

  const tagRef = useRef(null);
  const cardRef = useRef(null);
  const featureRef = useRef(null);
  const isfeautreinView = useInView(featureRef, { once: true })
  const isCardinView = useInView(cardRef, { once: true })
  const isTaginView = useInView(tagRef, { once: true })




  const navigateToEmployeeLogin = () => {
    navigate('/home');
  };

  const navigateToAdminLogin = () => {
    navigate('/home');
  };



  return (
    <div>
      <div className="min-h-screen  mx-auto max-w-[1000px]">

        <div className='relative z-10 min-h-screen w-full  flex items-center justify-center '>
          <div className=''>
            <motion.img initial={{ translateX: '-100px', scale: 0.6, translateY: '-100px', opacity: 0 }} transition={{ duration: '0.6', ease: 'backInOut' }} animate={{ translateX: 0, scale: 1, translateY: 0, opacity: 1, }} src={digitalbusiness} className='w-32 lg:w-44 absolute object-cover lg:top-24 lg:left-16 top-12 left-0 ' />
            <motion.img initial={{ translateX: '-100px', scale: 0.6, translateY: '100px', opacity: 0 }} transition={{ duration: '0.6', ease: 'easeInOut' }} animate={{ translateX: 0, scale: 1, translateY: 0, opacity: 1, }} src={tastmanagement} className='w-36 lg:w-44 absolute object-cover lg:bottom-24 lg:left-24 bottom-16 left-0 ' />
            <motion.img initial={{ translateX: '100px', translateY: '-100px', scale: 0.6, opacity: 0 }} transition={{ duration: '0.6', ease: 'backInOut' }} animate={{ translateX: 0, translateY: 0, scale: 1, opacity: 1, }} src={planner} className='w-32 lg:w-44 absolute object-cover lg:top-24 lg:right-24  top-12 right-0' />
            <motion.img initial={{ translateX: '100px', translateY: '100px', scale: 0.6, opacity: 0 }} transition={{ duration: '0.6', ease: 'easeInOut' }} animate={{ translateX: 0, translateY: 0, scale: 1, opacity: 1, }} src={laptop} className='w-32 lg:w-44 absolute lg:bottom-24 lg:right-24 object-cover bottom-12 right-0' />
          </div>
          <div className='flex flex-col gap-8  items-center justify-center'>
            <motion.h1 initial={{ opacity: 0, scale: 0.6 }} transition={{ duration: '0.3', ease: 'easeInOut' }} animate={{ opacity: 1, scale: 1 }} className='text-4xl lg:text-6xl text-center font-light'>Streamline Your Employee Management</motion.h1>

            <motion.p initial={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.3, duration: '0.3', ease: 'easeInOut' }} animate={{ opacity: 1, scale: 1 }} className='text-xl lg:text-2xl w-96 text-center'>Effortlessly manage your employees with our all-in-one platform.</motion.p>
          </div>
          <div className='absolute  scale-150  bottom-32  -z-10'>
            <Eclipse />
          </div>
        </div>


        <div className='w-full mt-32 max-w-[1200px] mx-auto my-12' >
          <motion.div style={{
            transform: isTaginView ? "none" : "translateY(200px)",
            opacity: isTaginView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) "
          }} id='tag' ref={tagRef} className='grid  grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-6 gap-12'>
            <h2 className='grid row-span-3 mx-12 z-[100] lg:col-span-3 font-bold text-4xl'>Streamline your employee management with ease</h2>
            <p className='grid row-span-3 z-[100] mx-12 lg:col-span-3 '>Our employee management platform offers a range of powerful features designed to simplify your HR processes. From seamless onboarding to efficient time tracking and insightful performance reviews, we've got you covered.</p>
          </motion.div>

          <div style={{
            transform: isCardinView ? "none" : "translateY(200px)",
            opacity: isCardinView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) "
          }} ref={cardRef} className='my-44 flex gap-8 items-center justify-center flex-wrap'>
            <div className=' flex justify-center items-center flex-col '>
              <div className='flex items-center justify-center '>
                <img className='w-[239px] z-10 relative' src={planner} />
                <img src={rectangle} className='w-[210px] blur-lg -z-10 absolute' />
              </div>
              <div>
                <h3 className='text-2xl font-semibold'>Accurate Time Tracking</h3>
                <p className='text-lg my-4 w-56'>Track employee hours and attendance with precision and ease.</p>
              </div>
            </div>
            <div className=' flex justify-center items-center flex-col '>
              <div className='flex items-center justify-center '>
                <img className='w-1/3 relative z-10' src={businessAnalytics} />
                <img src={rectangle} className='w-[180px] blur-xl -z-10 absolute' />
              </div>
              <div>
                <h3 className='text-2xl font-semibold'>Insightful Performance Reviews</h3>
                <p className='text-lg my-4 w-56'>Track employee hours and attendance with precision and ease.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          transform: isfeautreinView ? "none" : "translateY(200px)",
          opacity: isfeautreinView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) "
        }} ref={featureRef}>
          <div className='w-full max-w-[1200px] mx-auto  '>
            <h2 className='text-center text-4xl my-32'>FEATURES</h2>
            <div className='grid grid-cols-1  mx-6 gap-0 grid-rows-6 lg:grid-cols-6 lg:grid-rows-1'>
              <img className='w-[300px]  grid row-span-3  lg:col-span-3' src={womentplanning} />
              <div className='flex flex-col gap-6 row-span-3 lg:col-span-3'>
                <h2 className='text-2xl font-semibold'>How We Track Employee Progress</h2>
                <p>Our system provides detailed performance metrics and progress tracking tools to help employees stay on track with their goals. We utilize a variety of key performance indicators (KPIs) to measure productivity, task completion rates, and overall efficiency.</p>
              </div>
            </div>
          </div>
          <motion.div style={{
            transform: isfeautreinView ? "none" : "translateY(200px)",
            opacity: isfeautreinView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) "
          }} className='w-full max-w-[1200px] mx-auto my-12'>
            <div className='grid grid-cols-1 mx-6 items-center justify-center  gap-0 grid-rows-6 lg:grid-cols-6 lg:grid-rows-1'>
              <img className='w-[300px]  grid row-span-3 lg:col-span-3' src={dashboard} />
              <div className='flex flex-col gap-6 row-span-3  lg:col-span-3'>
                <h2 className='text-2xl font-semibold'>Admin Features</h2>
                <p>Admins have access to comprehensive tools for managing employee data, generating reports, and configuring system settings. With real-time data and analytics, admins can make informed decisions to optimize workforce performance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
        <Footer />
      </div>
  );
}

export { Landing };






// export function Foooter() {
//   return (
//     <footer className="bg-gray-800 text-white py-6 w-full">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-2 lg:px-1">
//         <div className="lg:flex lg:items-start lg:gap-8">
//           <div className="text-teal-300 flex flex-col items-center lg:items-start">
//             <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
//                 fill="currentColor"
//               />
//             </svg>
//             <p className="mt-6 max-w-sm text-gray-400 text-center lg:text-left">Empowering businesses with a streamlined employee management experience.</p>
//           </div>
//           <div className="mt-8 lg:mt-0 lg:flex-1 lg:grid lg:grid-cols-2 lg:gap-8 text-center lg:text-left">
//             <div>
//               <h3 className="text-gray-200 font-bold">Company</h3>
//               <ul className="mt-4 space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:underline">About Us</a></li>
//                 <li><a href="#" className="hover:underline">Careers</a></li>
//                 <li><a href="#" className="hover:underline">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gray-200 font-bold">Support</h3>
//               <ul className="mt-4 space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:underline">Help Center</a></li>
//                 <li><a href="#" className="hover:underline">FAQs</a></li>
//                 <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-gray-400 text-center lg:text-left">
//           &copy; 2024 Employee Management System. All rights reserved.
//         </div>
//       </div>

//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
//         <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Employee Management System</h1>
//         <div className="flex space-x-12">


//           <Link to={"/home"}>
//             <div
//               onClick={() => setUserType("employee")}

//               className="cursor-pointer max-w-sm p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
//               <img src="4782112.jpg" alt="Employee" className="w-full h-48 object-cover mb-4 rounded" />
//               <h2 className="text-2xl font-bold mb-2 text-gray-800">Employee</h2>
//               <p className="text-gray-700">Access your dashboard, view tasks, and manage your profile.</p>
//             </div>
//           </Link>


//           <Link to={"/home"}>
//             <div
//               onClick={() => setUserType("admin")}


//               className="max-w-sm p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
//               <img src="50426.jpg" alt="Admin" className="w-full h-48 object-cover mb-4 rounded" />
//               <h2 className="text-2xl font-bold mb-2 text-gray-800">Admin</h2>
//               <p className="text-gray-700">Manage employees, view reports, and configure system settings.</p>
//             </div>
//           </Link>
//         </div>

//       </div>

//     </footer>
//   );
// }