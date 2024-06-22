import React from 'react'
import AreaChart from '../Charts/AreaCharts'

function EmployeeDetails({ email, empRef }) {

    // fetch the data using the email 
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
                <p className='lg:mx-24 mx-0 mt-12 text-balance'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus maxime nemo, odio vero soluta optio. Culpa consequuntur aut necessitatibus, cum veniam placeat ex repudiandae minus voluptas, voluptatibus officiis molestias mollitia!</p>

                <div className='left-3  '>
                    <h3 className='ml-12 text-2xl '>Activities</h3>
                    <AreaChart />
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails