import { Link, useLocation } from 'react-router-dom';

function Navbar({ userType }) {
  const location = useLocation();

  const handleLogout = () => {
    // Logic for logout (e.g., clearing tokens, redirecting to login, etc.)
    console.log('User logged out');
  };

  return (
    <nav className="bg-white shadow-md">
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
                {userType && (
                  <>
                    <Link
                      to={`/${userType === 'admin' ? 'admin' : 'emp'}-dashboard`}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname.includes('dashboard')
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/about"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === '/about'
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
  );
}

export default Navbar;
