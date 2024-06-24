import React, { useEffect,useState } from 'react'
import axios from 'axios';


function EmployeeHistory() {

    const [employeeHistory, setEmployeeHistory] = useState([]);
    useEffect(() => {
        getEmployeeHistory();
        
    }, [])
    const getEmployeeHistory = async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json', 
            },
            withCredentials: true,
        };
        const response = await axios.get("http://localhost:5200/api/v1/admin/getLeaveEmployee ", config);
        console.log(response.data.data);
        setEmployeeHistory(response.data.data)
    }
    

  return (
    <div>

          <h1 className='text-center my-12 text-3xl'>Employee History</h1>
        <div>
            {employeeHistory.map((employee,i) => {
                return(
                    <div key={i} className='w-96 my-6 relative bg-white mx-auto p-4'>
                        <h3 className='text-xl'>{employee.fullName}</h3>
                        <h4 className='text-sm'>{employee.email}</h4>
                        {/* <h1 >{employee.leaveType}</h1> */}
                        <span className={`absolute bg-orange-900 py-1 px-2 bottom-0 right-0 ${employee.leaveStatus === 'approved' ? 'bg-green-500' : employee.leaveStatus === 'pending' ? 'bg-yellow-300' : 'bg-red-600'}`}>{employee.leaveStatus}</span>
                        {/* <h1>{employee.startDate}</h1> */}
                        {/* <h1>{employee.endDate}</h1> */}
                        <p className=''>{employee.reason}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default EmployeeHistory