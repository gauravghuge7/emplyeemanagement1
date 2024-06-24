import { useEffect, useState } from 'react'
import axios from 'axios';

function EmployeeDetails({ details, empRef }) {
    const [screenShots, setScreenShots] = useState([]);
    const [dailyReports, setDailyReports] = useState([]);

    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", details)

    useEffect(() => {

        console.log("Employee details: ", details);

        const url = `http://localhost:5200/api/v1/admin/getSnapshot`;

        axios.post(url, { email: details.email }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
        .then(res => {
            const data = res.data.data;


            setDailyReports(details.dailyReports);
            console.log("daily reports => ", details.dailyReports);


            if (data) {
                setScreenShots(data);
            }
        })
        .catch(err => {
            console.log(err);
        });




    },[]);



    

    return (
        <div className='bg-black h-auto w-full rounded-lg overflow-hidden pt-32'>


            <div className='bg-black/80 min-h-screen relative text-white backdrop-blur-lg border border-black p-4 rounded-lg mx-auto w-full lg:w-[800px]'>



                <button onClick={() => empRef.current.close()} className='text-white absolute top-3 right-3'>
                    Close
                </button>

                <div className='flex gap-4 justify-center items-center'>
                    <img className='rounded-lg' src='https://avatars.githubusercontent.com/u/61672294?v=4' width={96} />



                    <div className='flex flex-col gap-2'>
                        <h2 className='capitalize'>{details.firstName} {details.lastName}</h2>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4'>
                                <span>{details.email} </span>
                                <span>{details.phoneNumber}</span>
                            </div>
                            <div className='flex gap-4'>
                                <span className='border border-white rounded-full p-1 px-4 bg-black '>{`${details.isActive ? "Active 🟩" : "UnActive 🟥"}`}</span>
                                <span className='border border-white bg-black rounded-full p-1 px-4'>{details.role}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='left-3'>
                    <h3 className='ml-12 text-2xl my-12'>ScreenShots</h3>
                    <div className='flex gap-12 flex-wrap justify-center'>
                        {screenShots.map((screenshot, i) => {
                            return (
                                <img width={300} key={i} src={screenshot.screenShot.secure_url} alt="screenshot" />
                            )
                        })}
                    </div>

                    <h3 className='ml-12 text-2xl my-12'>Activities</h3>
                    
                </div>


                <div className='left-3'>
                    <h3 className='flex justify-center text-2xl my-12'>Daily Reports</h3>
                    <div className='flex flex-col justify-center gap-4'>
                        {dailyReports.map(report =>{
                            return (

                                <ul key={report} className=''>

                                    {report == null ?

                                        <div></div>
                                        :

                                        <li className='text-xl border flex flex-wrap p-3 rounded-lg'>{report}</li>  
                                        
                                    }
                                    
                                   
                                </ul>
                            )
                        })}
                    </div>

                    <div className='h-5'></div>
                    
                </div>


            </div>
        </div>
    );
}

export default EmployeeDetails;



















