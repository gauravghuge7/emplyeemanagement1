
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar({ userType, setUserType }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminUrl = location.pathname.includes('admin-dashboard');

  const handleLogout = () => {
    // Clear user data
    setUserType(null);
    localStorage.removeItem('userType'); // If you're using localStorage or sessionStorage
    sessionStorage.removeItem('userType'); // Clear session storage if used

    // Redirect to the home page and replace the history stack
    navigate("/", { replace: true });

    console.log('User logged out');
  };

  return (
    <div className=''>
      <nav className="bg-violet-100/50 backdrop-blur-lg shadow-md fixed right-0 left-0 top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-500">
                EMS Logo
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
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
                        onClick={handleLogout}
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
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
      </nav>
    </div>
  );
}

export default Navbar;
