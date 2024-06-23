import React, {useEffect, useState} from 'react';
import axios from 'axios';

function EmployeeNotification( props) {
    const [announcements, setAnnouncements] = useState([]);

   
console.log("props from dashboard", props)

useEffect(()=>{
    setAnnouncements(props.announcement)
})
    return (
        <div>
            <div className="mt-8 w-full max-w-md overflow-scroll h-40">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Announcements</h2>
                <ul className="space-y-4">
                    {announcements.map((ann, index) => (
                        <li key={index} className="p-4 bg-gray-200 rounded shadow text-black">
                            {ann}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EmployeeNotification;
