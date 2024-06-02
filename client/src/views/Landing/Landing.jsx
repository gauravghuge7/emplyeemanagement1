
import { Link } from 'react-router-dom';


function Landing({setUserType}) {
  

  


  return (
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
    <footer className="mt-16 text-gray-200">
      &copy; 2024 Employee Management System
    </footer>
  </div>
  );
}

export default Landing;
