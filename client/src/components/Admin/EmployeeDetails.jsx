import React, { useEffect, useState } from 'react'
import AreaChart from '../Charts/AreaCharts'
import axios from 'axios';

function EmployeeDetails({ details, empRef }) {
    // fetch the data using the email 
    // console.log(email)
    const [screenShots, setScreenShots] = useState([]);
    useEffect(() => {

        const url = `http://localhost:5200/api/v1/admin/getSnapshot?email=${details.email}`;
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }).then(res => {
            const data = res.data;
            console.log(data);
            if (data.status === 200) {
                setScreenShots(data.snapshot);
            }
        }).catch(err => {
            console.log(err);
        });
            

    }, [details.email]);
    return (
        <div className='bg-black max-h-screen rounded-lg cursor-all-scroll  relative pt-32'>
            <button onClick={() => empRef.current.close()} className='text-white absolute top-3 right-3'>close</button>
            <div className='bg-black/80 min-h-screen relative text-white backdrop-blur-lg border border-black p-4 rounded-lg h-96 mx-auto w-full lg:w-[800px]'>
                <div className='flex gap-4 justify-center items-center'>
                    <img className='rounded-lg' src='https://avatars.githubusercontent.com/u/61672294?v=4' width={96} />
                    <div className='flex flex-col gap-2'>
                        <h2>Sharad Bhadait</h2>

                        <div className='flex flex-col  gap-4'>
                            <div className='flex gap-4'>
                                <span>Email id</span>
                                <span>Phone No</span>
                            </div>
                            <div className='flex gap-4'>
                                <span className='border border-white rounded-full p-1 px-4 bg-black '>isAvaiable</span>
                                <span className='border border-white bg-black rounded-full p-1 px-4'>Role</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='left-3  '>
                    

                    <h3 className='ml-12 text-2xl my-12'>ScreenShots</h3>
                    <div className='mb-12'>
                        {screenShots.map((screenshot, i) => {
                            return (
                                <img key={i} src={screenshot} alt="screenshot" />
                            )
                        })}
                    </div>
                    <h3 className='ml-12 text-2xl '>Activities</h3>
                    <AreaChart />
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails