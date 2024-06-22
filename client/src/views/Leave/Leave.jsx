import { useState } from "react"
import axios from "axios"

function Leave() {

  const [fullName, setFullName] = useState('')
  const [id, setId] = useState('')
  const [date, setDate] = useState('')
  const [department, setDepartment] = useState('')
  const [reason, setReason] = useState('')
  const [description, setDescription] = useState('')


  const handleLeave = async(e) => {
    e.preventDefault()
    console.log("Submit")

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }

    const data = {
      fullName: fullName,
      employeeId: id,
      date: date,
      department: department,
      reason: reason,
      explainAboutLeave: description,
    }

    const response = await axios.post('http://localhost:5200/api/v1/user/leaveApplication', data, config);

    console.log(response);
    
    alert(response.data.message);

  }



  return (
    
    <div className="md-flex md-flex-column rounded-lg md-align-items-center shadow-lg shadow-blue-100 m-8 p-8 bg-gradient-to-r w-[50rem] h-[40rem] from-blue-400 to-purple-400 max-h-screen overflow-auto scroll-m-0">
      
      <form className="space-y-12  w-[90%] m-0 p-0 flex flex-col justify-center" onSubmit={handleLeave}>

        <p className="font-semibold tracking-wide"><span> Tip :</span> Please provide all information to relate the leave application</p>


        {/* full name input field */ }
        <div>
          <label className="block font-semibold" htmlFor="FirstName">
            your full Name
          </label>

          <input
            className="w-full border border-gray-500 outline-none shadow-inner bg-gray-100 rounded-lg placeholder-black text-sm p-4  block mt-1"
            id="FirstName"
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          
          />

        </div>

        {/* EMPLOYEE ID input field */ }
        <div>
          <label className="block font-semibold" htmlFor="lastName">
            Employee Id
          </label>
          <input
            className="w-full border border-gray-500 outline-none shadow-inner bg-gray-100 rounded-lg placeholder-black text-sm p-4  block mt-1"
            id="lastName"
            type="text"
            name="lastName"
            required="required"
            value={id}
            onChange={(e) => setId(e.target.value)}
          
          />
        </div>


        {/* date of leave input field */ }
        <div>
          <label className="block font-semibold" htmlFor="lastName">
            Date
          </label>
          <input
            className="w-full border border-gray-500 outline-none shadow-inner bg-gray-100 rounded-lg placeholder-black text-sm p-4  block mt-1"
            id="lastName"
            type="date"
            name="lastName"
            required="required"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          
          />
        </div>


        {/* Position input field */ }
        <div className="mt-4">
          <label className=" block font-semibold" htmlFor="email">
            Position
          </label>
          <input
            className="w-full shadow-inner border border-gray-500 outline-none bg-gray-100 rounded-lg placeholder-black text-sm p-4  block mt-1 "
            id="email"
            type="text"
            name="email"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required

          />
        </div>


        {/* reason of leave input field */ }
        <div className="mt-4">
          <label className=" block font-semibold" htmlFor="email">
            Reason of Leave
          </label>
          <input
            className="w-full shadow-inner border border-gray-500 outline-none bg-gray-100 rounded-lg placeholder-black text-sm p-4  block mt-1 "
            id="email"
            type="text"
            name="email"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required

          />
        </div>

        {/* Explain About leave description input field */ }
        <div className="mt-4">
          <label className="block font-semibold" htmlFor="phoneNumber">
            Explain About Leave Reason
          </label>
          <textarea cols="30" rows="5"
            className="w-full border border-gray-500 outline-none shadow-inner bg-gray-100 rounded-lg placeholder-black text-sm p-4  block mt-1 "
            id="phoneNumber"
            type="text"
            name="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
          >

          </textarea>
        </div>


        {/* Submit button */ }
        <div className="flex items-center justify-between mt-8">
          <button
            type="submit"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"

          >
            Submit
          </button>

        </div>

      </form>

    </div> 
  )
}

export default Leave