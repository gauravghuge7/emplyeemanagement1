import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast, Toaster } from 'sonner';


function EmployeeDetails({ details, empRef }) {
    const [screenShots, setScreenShots] = useState([]);
    const [dailyReports, setDailyReports] = useState([]);
    const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);
    const [message, setMessage] = useState('');







    const handleSendMessage = async () => {
        if (message.trim() === '') {
          toast.error('Message cannot be empty');
          return;
        }
    
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const email = details.email
          console.log("email of employee",email )
    
          const body = { message, email };

          console.log("messssssssssssssssssssssss", message,email)
    
          const response = await axios.post('http://localhost:5200/api/v1/admin/sendNotice', body, config);
    
          if (response.data.success) {
            toast.success('Message sent successfully');
            setMessage('');
            setIsMessageBoxVisible(false);
          } else {
            toast.error('Failed to send message');
          }
        } catch (error) {
          toast.error('Error sending message');
        }
      };
    
      const handleCancel = () => {
        setIsMessageBoxVisible(false);
        setMessage('');
      };











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
    <div className='bg-black h-auto w-full rounded-lg overflow-hidden pt-32  '>
    

      <div className='bg-black/80 min-h-screen relative text-white rounded-3xl backdrop-blur-lg border border-black p-4  mx-auto w-full lg:w-[800px]'>



        <button onClick={() => empRef.current.close()} className='text-white absolute top-3 right-3'>
          Close
        </button>

        <div className='flex gap-20 justify-center items-center'>

          <img className='rounded-lg' src='https://avatars.githubusercontent.com/u/61672294?v=4' width={96} />



          <div className='flex flex-col gap-2'>

            <h2 className='capitalize'>{details.firstName} {details.lastName}</h2>

            <div className='flex flex-col gap-4'>

              <div className='flex flex-col gap-4'>
                  <span>{details.email} </span>
                  <span>{details.phoneNumber}</span>
              </div>

              <div className='flex gap-4 align-center'>
                  <span className='border border-white rounded-full p-1 px-4 bg-black '>{`${details.isActive ? "Active 🟩" : "UnActive 🟥"}`}</span>
                  <span className='border border-white bg-black rounded-full p-1 px-4'>{details.role}</span>
              
                {/* message box */}

                <div>

                  <span className='border border-white bg-black rounded-full p-1 px-4'>
                    <button onClick={() => setIsMessageBoxVisible(true)}>send message</button>
                  </span>

                  {isMessageBoxVisible && (
                    <div className="fixed inset-0 flex items-top justify-center bg-black bg-opacity-50">
                      <div className='bg-white p-4 border border-gray-300 rounded w-96' style={{ height: '40vh', overflowY: 'auto' }}>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className='w-full p-2 border rounded text-black'
                          rows='4'
                          placeholder='Write your message here...'
                        ></textarea>
                        <div className='mt-2 flex justify-end'>
                          <button
                            onClick={handleSendMessage}
                            className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                          >
                            Send
                          </button>
                          <button
                            onClick={handleCancel}
                            className='bg-gray-300 text-black px-4 py-2 rounded'
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}


                </div>


              </div>

          </div>
      </div>


        </div>

        <div className='left-3'>

            <h3 className='ml-12 text-2xl my-12'>ScreenShots</h3>
            <div className='flex gap-12 flex-wrap justify-center border rounded-xl'>
                {screenShots.map((screenshot, i) => {
                    return (

                      <div key={i} className='shadow-lg p-20 w-[20rem] flex flex-wrap shadow-gray-400 rounded-xl'>

                        <h1>{screenshot.title}</h1>
                        <h2>{screenshot.description}</h2>

                        <img width={300} src={screenshot.screenShot.secure_url} alt="screenshot" />

                      </div>
                      )
                })}
            </div>

            <h3 className='ml-12 text-2xl my-12'>Activities</h3>
            
        </div>


        <div className='left-3'>
            <h3 className='flex justify-center text-2xl my-12'>Daily Reports</h3>
            <div className='flex flex-col justify-center gap-4'>
                {dailyReports.map((report, i) =>{
                    return (

                      <div key={i} className='shadow-sm p-20 shadow-gray-400 rounded-lg'>

                        <h1>{report}</h1>
                        <h2>{report}</h2>

                        {report == null ?

                            "<div></div>"
                            :

                            <li className='text-xl  flex flex-wrap p-3 rounded-lg'>{report}</li>  
                            
                        }
                            
               

                      </div>
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



















