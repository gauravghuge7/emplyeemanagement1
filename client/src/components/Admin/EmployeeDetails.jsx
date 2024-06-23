import { useEffect, useState } from 'react'
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
        })
        .then(res => {
            const data = res.data.data;
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
                                <span>{details.email}</span>
                                <span>{details.phoneNumber}</span>
                            </div>
                            <div className='flex gap-4'>
                                <span className='border border-white rounded-full p-1 px-4 bg-black '>{`${details.isActive?"Active":"UnActive"}`}</span>
                                <span className='border border-white bg-black rounded-full p-1 px-4'>{details.role}</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='left-3  '>
                    

                    <h3 className='ml-12 text-2xl my-12'>ScreenShots</h3>
                    <div className='mb-12'>
                        {screenShots.map((i, screenshot) => {

                            return (
                                <img key={i} src={screenshot} alt="screenshot" />
                            )
                        })}
                    </div>
                    

                    <div className='ml-12 my-12'>
                        <h3>Daily Report</h3>
                        {details.dailyReports.map((i, report) => {
                            return (
                                <div key={i} className='flex gap-4'>
                                    <span>{report.date}</span>
                                    <span>{report.time}</span>
                                    <span>{report.activity}</span>
                                </div>
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