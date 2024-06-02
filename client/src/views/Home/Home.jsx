
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import EmpLogin from '../../components/Login/EmpLogin';
import AdmLogin from '../../components/Login/AdmLogin';
import AdminContext from '../../Context/context';

function Home({setUserType}) {

  
  const login = useContext(AdminContext);

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-2xl border border-gray-300">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Employee Management System</h1>
        <p className="text-center mb-8 text-gray-700">
          Our system helps you manage employee information, track performance, and streamline HR processes.
        </p>
        

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          
          <EmpLogin />
          <AdmLogin />
          {login === "employee" && <EmpLogin />}
          {login === "admin" && <AdmLogin />}
         
          
          
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-700">"Empowering your workforce, one login at a time."</p>
          <p className="text-gray-700 mt-2">Need help? <Link to="/support" className="text-blue-500 hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
