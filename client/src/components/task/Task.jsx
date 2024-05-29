import { Link } from "react-router-dom"


function Task() {
  return (
    <div className="md-flex md-flex-column md-align-items-center shadow-lg rounded-lg p-8 shadow-gray-400">
      
      <div className=" text-lg rounded border border-black p-3 text-center"
      > 
      <Link to="/AddTask">

        Add Task
      </Link>
      </div>

    </div>
  )
}


export const AddTask = () => {
  return (
    <div className="md-flex md-flex-column md-align-items-center m-8 p-8">
      
      <form>

      {/* project name input field */ }
      <div>
        <label className="block font-semibold" htmlFor="FirstName">
          Project Name
        </label>
        <input
          className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
          id="FirstName"
          type="text"
          name="ProjectName"
          required
        
        />
      </div>

      {/* task name input field */ }
      <div>
        <label className="block font-semibold" htmlFor="lastName">
          Task Title
        </label>
        <input
          className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
          id="lastName"
          type="text"
          name="lastName"
          required="required"
        
        />
      </div>


      {/* department input field */ }
      <div className="mt-4">
        <label className="block font-semibold" htmlFor="email">
          Department
        </label>
        <input
          className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 "
          id="email"
          type="text"
          name="email"
          required

        />
      </div>

      {/* project description input field */ }
      <div className="mt-4">
        <label className="block font-semibold" htmlFor="phoneNumber">
          Description
        </label>
        <textarea cols="30" rows="10"
          className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 "
          id="phoneNumber"
          type="text"
          name="Description"
          required
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

export default Task
