import { useEffect, useState } from 'react';
import axios from 'axios';



function EmpProfile() {

  const [employee, setEmployee] = useState({
    firstName: "null",
    lastName: "null",
    phoneNumber: "null",
    email: 'sharad.bhadait@asia.com',
    bio: "null",
    avatar: "null",
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarName, setAvatarName] = useState(null);

  const fetchProfile = async () => {

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      
      withCredentials: true
    };

    try {
      const response = await axios.get("http://localhost:5200/api/v1/user/getUserProfile", config);
      
      const data = response.data;
  

      console.log(data.data);
      
      if (data.success) {
        
        alert(data.message);
       
       setEmployee(data.data);
       setAvatar(data.data.avatar.secure_url);
      }
    
    } 

    catch (error) {
      console.log(error);
    }


  };

  const data = useEffect(() => {

    fetchProfile();

  }, []);


  

  

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can add functionality to save the updated employee details

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },  
      withCredentials: true
    };

    const formData = new FormData();
    formData.append("avatar", avatar);
    


    const body = {
      phoneNumber: employee.phoneNumber,
      bio: employee.bio,
      
    }



    const response = await axios.post("http://localhost:5200/api/v1/user/updateProfile", formData, config);


    console.log(response);

    const data = response.data;

    console.log(data);

    if (data.success) {
      alert(data.message);
      setEmployee(data.data);
      setAvatar(data.data.avatar.secure_url);
    }

    toggleEditMode();
  };


  const handleImageChange = (e) => {

    setAvatar(e.target.file);
    

  };

  return (
    <div>
      <div className="my-20  mx-4 rounded-lg flex relative items-center justify-center  p-6 sm:p-8 lg:p-10 shadow-md bg-white ">

        <br className="my-8" />

        {/**** this is the edit mode */}
        {isEditing ? (

          <form onSubmit={handleSubmit} className="flex  flex-col gap-6 items-start employee-form">
            <div className="flex  flex-col lg:flex-row items-center lg:items-start  gap-6 lg:gap-10 ">
              <div className="flex-shrink-0">
                <label >
                  Avatar:
                  <input type="file" className='mx-2' name={"avatar"} accept="image/*" onChange={handleImageChange}/>
                  {avatar && <img  width={'120'} height={'120'} src={avatar} alt="Avatar" className="" />}
                </label>
              </div>
            </div>

            <label className='flex items-center gap-2'>
              Name:
              <input readOnly={true} type="text" name="name" className='p-2 outline-none border rounded-lg' value={employee.firstName} onChange={handleInputChange} />
            </label>
            
            

            {/******last Name field */}
            <label className='flex items-center gap-2'>
              Last Name:
              <input readOnly={true} type="text" name="name" className='p-2 outline-none border rounded-lg' value={employee.lastName} onChange={handleInputChange} />
            </label>


            <label className='flex items-center gap-2'>
              Phone Number:
              <input type="text" name="phone" className='p-2 rounded-lg outline-none border' value={employee.phoneNumber} onChange={handleInputChange} />
            </label>
            <label className='flex items-center gap-2'>
              Email:
              <input type="email" name="email" className='p-2 rounded-lg outline-none border' value={employee.email} onChange={handleInputChange} />
            </label>
            <label className='flex items-start  gap-2'>
              Bio:
              <textarea name="bio" cols={'60'} rows={'4'} value={employee.bio} className='p-2  border outline-none rounded-lg' onChange={handleInputChange} />
            </label>
            <button className='bg-blue-600 p-2 rounded-xl w-24' type="submit">Save</button>
            <button type="button" onClick={toggleEditMode} className='bg-black p-2 w-24 rounded-lg text-white' >Cancel</button>
          </form>

        ) : (

          <div className="employee-details   text-lg flex flex-col justify-center items-center space-y-6">
          {/**** this is the view mode */}

            
            {/**** Profile section  */}
            <div className='grid grid-cols-1 lg:grid-cols-2  '>
              <div >

                {/**** Avatar section  */}
                <img
                  className="rounded-full lg:translate-x-10 lg:h-32 lg:w-36 h-28 w-28 border-2 "
                  src={avatar} width={'120'} alt="Profile Image" />

              </div>
                  {/**** Name section  */}
                <div className=' -translate-x-0 lg:-translate-x-10'>
                
                  <div className='flex gap-2 my-6'>
                    <p className='text-4xl'> {employee.firstName}</p>
                    <p className='text-4xl'> {employee.lastName}</p>
                  </div>

                  <div className='flex gap-2 my-6'>
                    <p className='border border-violet-600 p-1 px-4  rounded-full'>  {employee.phoneNumber}</p>
                    <p className='border border-violet-500 p-1 px-4 rounded-full'> {employee.email}</p>
                  </div>

                  <p> {employee.bio}</p></div>
            </div>
            <button onClick={toggleEditMode} className='absolute top-0 right-0 flex gap-2 items-center  p-2 rounded-xl w-24'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>Edit
            </button>
          </div>
        )}
      </div>
    </div>
         
  );
}

export default EmpProfile;
