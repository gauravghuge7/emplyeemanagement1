import axios from 'axios';
import  { useEffect, useState } from 'react';

function AdminProfiles() {

    const [admin, setAdmin] = useState({
        firstName: "Gaurav",
        lastName: 'Ghuge',
        email: 'GauravGhuge@gmail.com',
        phoneNumber:'9947834732',
        _id: '2323'
    })


    const getAdminProfile = async() => {

        const config = {
            headers: {
                "content": "application/json"
            },

            withCredentials: true

        }

        const response = await axios.get("http://localhost:5200/api/v1/admin/getAdminProfile", config);

        const data = response.data.data;

        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", data);

        setAdmin(data);


    }


    useEffect(() => {

        getAdminProfile();

    },[])




return (
    <div className='lg:w-[70vw]  mx-auto border p-4 rounded-3xl lg:p-9'>

        <div className="flex items-center   mb-8">
            <div className="mr-4">
                <img src="https://randomuser.me/api/portraits/women/21.jpg" className='rounded-full h-24 w-24' alt="Admin Avatar" />
            </div>
            <div>
                <div className='flex'>
                    <h1 className="text-2xl font-bold">{admin.firstName}</h1>
                    <h1 className="text-2xl font-bold">{admin.lastName}</h1>
                </div>
                <p className="text-gray-500 dark:text-gray-400">Admin</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <div className="mr-2 text-gray-500 dark:text-gray-400" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
                        <span className='mx-3'>{admin.email}</span>
                    </div>
                   
                    <div className="flex items-center">
                        <div className="mr-2 text-gray-500 dark:text-gray-400" />
                        <span>ID :  </span>
                        <span className='mx-3'>{admin._id}</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Role and Permissions</h2>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <div className="mr-2 text-gray-500 dark:text-gray-400" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  className="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        <span className='mx-3'>Admin</span>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2 text-gray-500 dark:text-gray-400" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        <span className='mx-3'>Full access to all employee data and management tools</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default AdminProfiles;