// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// function EmployeeNotification( props) {
//     const [announcements, setAnnouncements] = useState([]);

   
// console.log("props from dashboard", props)

// useEffect(()=>{
//     setAnnouncements(props.announcement)
// })
//     return (
//         <div>
//             <div className="mt-8 w-full max-w-md overflow-scroll h-40">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Announcements</h2>
//                 <ul className="space-y-4">
//                     {announcements.map((ann, index) => (
//                         <li key={index} className="p-4 bg-gray-200 rounded shadow text-black">
//                             {ann}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default EmployeeNotification;







import React, { useEffect, useState } from 'react';

function EmployeeNotification(props) {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Assuming props.announcement is an array of announcement objects
    setAnnouncements(props.announcement);
  }, [props.announcement]);

  return (
    <div className="mt-8 flex justify-center items-center h-full ">
      <div className="w-full max-w-3xl  shadow-md rounded-lg p-8 bg-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Recent Announcements</h2>
        <div className="space-y-6">
          {announcements.map((ann, index) => (
            <div key={index} className="bg-gray-200 rounded-lg shadow p-6 text-black">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600">{ann.date}</p>
                <p className="text-sm text-gray-600">Announced by: {ann.announcedBy}</p>
              </div>
              <h3 className="text-xl font-bold mb-2">{ann.title}</h3>
              <p className="text-base">{ann.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeNotification;
