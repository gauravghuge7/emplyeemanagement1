import React, { useEffect, useState } from 'react'
import axios from 'axios';


function History() {
    const [allLeaves,setAllLeaves] = useState([]);
    const getAllLeaves = async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json', 
            },
            withCredentials: true,
        };
        const response = await axios.get("http://localhost:5200/api/v1/admin/getAllLeaves", config);
        console.log(response.data.data);
        setAllLeaves(response.data.data)
    }

    useEffect(() => {
        getAllLeaves();
    
    },[])

    function convertToSimpleDate(isoDateString) {
        const date = new Date(isoDateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
  return (
    <div>
     
          <h1 className='text-center my-12 text-3xl'>History</h1>
          <div>
              {allLeaves.map((employeeRecord, i) => {
                  return (
                      <div key={i} className='w-96 my-6  relative bg-white mx-auto p-4'>
                          <div>
                              <div className='mb-12'> 
                                  <h3 className='text-xl capitalize'>{employeeRecord.fullName}</h3>
                                  <h4 className='text-sm'>{employeeRecord.email}</h4>
                                </div>
                              <p className=''>{employeeRecord.reason}</p>

                            </div>
                          <span className={`absolute bg-orange-900 py-1 px-2 top-0 right-0 ${employeeRecord.leaveStatus === 'approved' ? 'bg-green-500' : employeeRecord.leaveStatus === 'pending' ? 'bg-yellow-300' : 'bg-red-600'}`}>{employeeRecord.leaveStatus}</span>
                   
                          <p className='absolute bg-black text-white bottom-0 right-0 px-1 rounded-l-lg'>{convertToSimpleDate(employeeRecord.date)}</p>
                      </div>
                  )
              })}
          </div>

    </div>
  )
}

export default History