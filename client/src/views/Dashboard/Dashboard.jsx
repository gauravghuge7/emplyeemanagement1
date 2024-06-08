import { useState } from 'react';
import EmpProfile from '../EmployeeProfile/EmpProfile';

import EmpDailyReport from '../EmployeeProfile/EmpDailyReport';
import Calendar from '../EmployeeProfile/Calender';
import Admin from '../../components/Dashboard/Admin';
import Leave from '../Leave/Leave';

export function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex flex-col  bg-gray-100 bg-gradient-to-r from-blue-400 to-purple-400  ">

      <aside className=" bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4  h-[calc(90vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0" style={{ marginTop: "5rem" }}>


        <div className=" relative border-b border-white/20">
          <a className="flex items-center gap-4 py-6 px-8" href="#/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">

            </h6>
          </a>
          <button
            className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>

        </div>

        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">

            <li>
              <a aria-current="page" className="active" href="#">
                <button
                  className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none  disabled:pointer-events-none text-sm py-3 rounded-lg text-white  hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center px-4 capitalize  ${activeTab === 'profile' && 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                  type="button"
                  onClick={() => setActiveTab('profile')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  <li
                   className='p-4' 
                  >
                    Profile
                  </li>
                </button>
              </a>
            </li>


            <li>
              <a className="" >
                <button
                  className={`middle none font-sans text-sm font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center  px-4 capitalize  ${activeTab === 'leave' && 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                  type="button"
               onClick={() => setActiveTab('leave')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <li
            className={`p-4 cursor-pointer`}
            
          >
            Application for Leave
          </li>
                </button>
              </a>
            </li>


            <li>
              <a className="" >
                <button
                  className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center  px-4 capitalize  ${activeTab === 'report' && 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                  type="button"
             onClick={() => setActiveTab('report')}

                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                      clipRule="evenodd"
                    />
                  </svg>
                 <li
            className={`p-4 cursor-pointer ${activeTab === 'report' && ''}`}
           
          >
            Daily Report
          </li>
                </button>
              </a>
            </li>


            <li>
              <a className="" href="#" >
                <button
                  className={`middle none relative font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center  px-4 capitalize  ${activeTab === 'calendar' && 'bg-gradient-to-tr from-blue-600 to-blue-400'}`}
                  type="button"
                 onClick={() => setActiveTab('calendar')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                  <li
            className={`p-4 cursor-pointer ${activeTab === 'calendar' && ''}`}
            
          >
            Calendar
          </li>
                </button>
              </a>
            </li>


          </ul>


        </div>
      </aside>

      {/* <div className="w-64 bg-white shadow-md">
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
      </div> */}
      <div className=" lg:w-[70vw] w-full  mx-auto mt-16 absolute right-0 lg:right-20 ">

        {activeTab === 'profile' && <EmpProfile />}
        {activeTab === 'leave' && <Leave />}
        {activeTab === 'report' && <EmpDailyReport />}
        {activeTab === 'calendar' && <Calendar />}
      </div>
    </div>
  );
}

export function AdminDashboard() {


  return (
    <div className="p-6 bg-gradient-to-r from-blue-400 to-purple-400">

      <Admin />
    </div>
  );
}






