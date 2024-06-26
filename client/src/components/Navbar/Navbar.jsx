
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

function Navbar({ userType, setUserType }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminUrl = location.pathname.includes('admin-dashboard');

  const handleLogout = async (e) => {
    console.log("lllllllllllllll", userType)
    // Clear user data
    setUserType(null);
    localStorage.removeItem('userType'); // If you're using localStorage or sessionStorage
    sessionStorage.removeItem('userType'); // Clear session storage if used

    e.preventDefault();


    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }

    const response = await axios.post('http://localhost:5200/api/v1/user/logout', config);

    console.log(response);

    const data = response.data;

    console.log(data);



    if (response.status === 200) {


      // alert(data.message);

      toast.success(data.message);



      navigate("/", { replace: true });
      toast.success(" Logged Out Successfully");



    }


  };

  const handleAdminLogout = async (e) => {
    // Clear user data
    setUserType(null);
    localStorage.removeItem('token'); // If you're using localStorage or sessionStorage
    sessionStorage.removeItem('userType'); // Clear session storage if used
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }


    const response = await axios.post('http://localhost:5200/api/v1/admin/logout', config);
    localStorage.removeItem('admin')
    document.cookie = 'admintoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    console.log(response);

    const data = response.data;

    console.log(data);



    if (response.status === 200) {


      // alert(data.message);

      toast.success(data.message);


      toast.success("logged out");

      navigate("/", { replace: true });


    }

      
  };

  return (
    <div   className='z-[100]'>
      <motion.nav initial={{ translateY: '-100px', opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} animate={{ translateY: '0px', opacity: 1 }} className="bg-violet-100/50  backdrop-blur-lg shadow-md fixed right-0 left-0 top-0 z-[100] ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Link to="/" className="text-2xl font-light">
                EMS 
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {location.pathname === '/' && (
                    <Link
                      to="/emplogin"
                      className={`
    inline-flex items-center px-4 py-2  rounded-lg  hover:border-b-4 hover:border-b-black font-medium transition-all duration-200 ease-in-out
    ${location.pathname === '/'
                          ? 'bg-black  text-white shadow-md hover:bg-blue-600 hover:shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                        }
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  `}
                    >
                      <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Employee
                    </Link>
                  )}
                  {location.pathname === '/' && (
                    <Link
                      to="/adminlogin"
                      className={`px-3 py-2 rounded-md hover:border-b-4 hover:border-b-black  font-medium ${location.pathname === '/'
                        ? 'bg-blue-500 text-white font-poppins'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      Admin
                    </Link>
                  )}
                  {(location.pathname.includes('admin') || location.pathname.includes('emp')) && (
                    <>
                      <Link
                        to={`/${isAdminUrl ? 'admin' : 'emp'}-dashboard`}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname.includes('dashboard')
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        Dashboard
                      </Link>

                      <Link
                        to="/about"
                        className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/'
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        About
                      </Link>
                      <button
                        onClick={(location.pathname.includes('admin')) ? handleAdminLogout : handleLogout}
                        to="/logout"
                        className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/logout'
                          ? 'bg-blue-500 text-white'
                          : `text-gray-700 hover:bg-gray-200`
                          }`}
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
