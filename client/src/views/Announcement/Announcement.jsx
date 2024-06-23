

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Announcement() {
    const [announcement, setAnnouncement] = useState("");
    const [announcements, setAnnouncements] = useState([]);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState('');

    const handleAnnouncementSubmit = async (e) => {
        e.preventDefault();

        if (announcement.trim() === "") {
            setMessage("Announcement cannot be empty!");
            setMessageType('error');
            return;
        }

        console.log(announcement);

        const body = {
            announcement: announcement,
        };

        try {
            const response = await axios.post('http://localhost:5200/api/v1/admin/createAnnouncement', body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response.data);

            if (response.data.success) {
                setAnnouncements([...announcements, response.data.announcement]);
                setAnnouncement("");
                setMessage("Announcement successfully created!");
                
                await fetchAnnouncements()
                setMessageType('success');
            } else {
                setMessage("Failed to create announcement. Please try again.");
                setMessageType('error');
            }
        } catch (error) {
            console.error("Error creating announcement:", error);
            setMessage("An error occurred while creating the announcement. Please try again.");
            setMessageType('error');
        }
    };

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.post('http://localhost:5200/api/v1/admin/getAnnouncements');
            console.log('Fetched Announcements:', response.data);
    
            if (response.data.success) {
                const announcementsData = response.data.data; // Assuming the announcements are in `data`
                const flattenedAnnouncements = announcementsData.map(item => item.announcement).flat();
                setAnnouncements(flattenedAnnouncements);
            }
        } catch (error) {
            console.error("Error fetching announcements:", error);
        }
    };
    

    // useEffect(() => {
    //     fetchAnnouncements();
    // }, []);

    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100 min-h-screen">
            <div className="bg-gray-300 shadow-md p-4 rounded-lg  w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Announcement</h2>
                {message && (
                    <div className={`mb-4 text-sm ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleAnnouncementSubmit} className="space-y-4">
                    <textarea
                        value={announcement}
                        onChange={(e) => setAnnouncement(e.target.value)}
                        placeholder="Enter your announcement"
                        rows="4"
                        className="w-full p-2 border rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Create Announcement
                    </button>
                </form>
            </div>
            <div className="mt-8 w-full max-w-md overflow-scroll h-40 ">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Announcements</h2>
                <ul className="space-y-4  ">
                    {announcements.map((ann, index) => (
                        <li key={index} className="p-4 bg-gray-200 rounded shadow text-black ">
                            {ann}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Announcement;
