
import {serverUrl} from "../../../Url/url.backend.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Sidebar({ activeBox, setActiveBox, notifactionCount }) {
    const [count,setCount] = useState(0);

     const [isOpen, setIsOpen] = useState(true);
     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
         const handleResize = () => {
             setIsMobile(window.innerWidth < 768);
         };

         handleResize();
         window.addEventListener('resize', handleResize);

         return () => window.removeEventListener('resize', handleResize);
     }, []);
     const config = {
         headers: {
             'Content-Type': 'application/json',
         },
         withCredentials: true,
     };

    const fetchleave = async () => {
        const response = await axios.get(`${serverUrl || "http://localhost:5200" }/api/v1/admin/getLeaveEmployee`, config);
        return response.data;
    }
    useEffect(() => {
        const res = fetchleave().then((res) => {

            const check = res.data.filter((item) => item.leaveStatus === 'pending')
            setCount(check.length);
        })
    },[])

    console.log(activeBox)
     const MobileNav = () => {
         return <div className=' min-h-12 z-[100] bg-white/80 p-2 sticky top-0 backdrop-blur-lg  '>
             <Link to={"/"} className=' text-2xl ml-4'>EMS</Link>
             {isOpen ? <div className='absolute right-3 top-3 ' onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6" /><line x1="21" x2="9" y1="12" y2="12" /><line x1="21" x2="7" y1="18" y2="18" /></svg></div> : <div className='h-full'><button className='absolute right-3 top-3' onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button><nav className='mt-8 ml-4 gap-3 flex flex-col  items-end mr-12 text-xl mb-4'>
                 <Link className={`${activeBox === 'dashboard' ? 'underline  underline-offset-2 font-semibold' :''}  hover:underline`} onClick={() =>{ setActiveBox("dashboard") ; setIsOpen(!isOpen)}}  to="/admin-dashboard">Dashboard</Link>
                 <Link className={`${activeBox === 'profile' ? 'underline underline-offset-2 font-semibold' : ''} hover:underline`} onClick={() =>{ setActiveBox("profile") ; setIsOpen(!isOpen)}} to="/admin-dashboard">Profile</Link>
                 <Link className={`${activeBox === 'manage' ? 'underline underline-offset-2 font-semibold' : ''} hover:underline`} onClick={() =>{ setActiveBox("manage") ; setIsOpen(!isOpen)}} to="/admin-dashboard">Manage</Link>
                 <Link className={`${activeBox === 'notifications' ? 'underline underline-offset-2 font-semibold' : ''} hover:underline`} onClick={() =>{ setActiveBox("notifications") ; setIsOpen(!isOpen)}} to="/admin-dashboard">Notifications</Link>
                 <Link className={`${activeBox === 'report' ? 'underline underline-offset-2 font-semibold' : ''} hover:underline`}onClick={() =>{ setActiveBox("report") ; setIsOpen(!isOpen)}} to="/admin-dashboard">Report</Link>
                 <Link className={`${activeBox === 'announcement' ? 'underline underline-offset-2 font-semibold' : ''} hover:underline`} onClick={() =>{ setActiveBox("announcement") ; setIsOpen(!isOpen)}}  to="/admin-dashboard">Announcement</Link>
                 <Link className={`${activeBox === 'history' ? 'underline underline-offset-2 font-semibold' : ''} hover:underline`}  onClick={() =>{ setActiveBox("history") ; setIsOpen(!isOpen)}} to="/admin-dashboard">History</Link>

             </nav></div>
             }</div>
     }
   

    return (
        <>
            <nav>
                {isMobile ? <MobileNav /> : 
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
                                    <a className="" href="#">
                                        <button
                                            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                                            type="button"
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
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                                dashboard
                                            </p>
                                        </button>
                                    </a>
                                </li>


                                <li>
                                    <a className="" >
                                        <button
                                            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                            type="button"
                                            onClick={() => setActiveBox("profile")}
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
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                                profile
                                            </p>
                                        </button>
                                    </a>
                                </li>


                                <li>
                                    <a className="" >
                                        <button
                                            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                            type="button"
                                            onClick={() => setActiveBox("manage")}

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
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                                manage
                                            </p>
                                        </button>
                                    </a>
                                </li>


                                <li>
                                    <a className="" href="#" >
                                        <button
                                            className="middle none relative font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                            type="button"
                                            onClick={() => setActiveBox("notifications")}
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
                                                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                                clipRule="evenodd"
                                            />

                                        </svg>

                                            
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                                notifications
                                            </p>
                                        </button>
                                    </a>
                                </li>
                        


                                <li>
                                    <a className="" href="#">
                                        <button
                                            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                            type="button"
                                            onClick={() => setActiveBox("announcement")}
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
                                                    d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm-9.75-3.75A.375.375 0 0010.875 9H3.375A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375H3.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                                Announcement
                                            </p>
                                        </button>
                                    </a>
                                </li>



                                <li>
                                    <a className="" href="#">
                                        <button
                                            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                            type="button"
                                            onClick={() => setActiveBox("history")}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg>
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                                History
                                            </p>
                                        </button>
                                    </a>
                                </li>


                            </ul>

                        </div>
                
                
                    </aside> 
                }
            </nav>

        </>

    )
}

export default Sidebar