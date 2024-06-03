import React, { useState } from 'react';

function EmpProfile() {
  const [employee, setEmployee] = useState({
    name: 'Sharad Bhadait',
    phone: '123-456-7890',
    email: 'sharad.bhadait@asia.com',
    bio: 'A dedicated and hardworking employee.',
    avatar: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add functionality to save the updated employee details
    toggleEditMode();
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee({ ...employee, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 shadow-md shadow-gray-400 bg-gradient-to-r from-blue-400 to-purple-400">

        <br className="my-8" />
        {isEditing ? (

          <form onSubmit={handleSubmit} className="flex  flex-col gap-6 items-start employee-form">
            <div className="flex  flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
              <div className="flex-shrink-0">
                <label>
                  Avatar:
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  {employee.avatar && <img width={'120'} height={'120'} src={employee.avatar} alt="Avatar" className="avatar-preview" />}
                </label>
              </div>
            </div>
            <label className='flex items-center gap-2'>
              Name:
              <input readOnly={true} type="text" name="name" className='p-2 outline-none rounded-lg' value={employee.name} onChange={handleInputChange} />
            </label>
            <label className='flex items-center gap-2'>
              Phone:
              <input type="text" name="phone" className='p-2 rounded-lg outline-none' value={employee.phone} onChange={handleInputChange} />
            </label>
            <label className='flex items-center gap-2'>
              Email:
              <input type="email" name="email" className='p-2 rounded-lg outline-none' value={employee.email} onChange={handleInputChange} />
            </label>
            <label className='flex items-start  gap-2'>
              Bio:
              <textarea name="bio" cols={'60'} rows={'4'} value={employee.bio} className='p-2 outline-none rounded-lg' onChange={handleInputChange} />
            </label>
            <button className='bg-blue-600 p-2 rounded-xl w-24' type="submit">Save</button>
            <button type="button" onClick={toggleEditMode} className='bg-black p-2 w-24 rounded-lg text-white' >Cancel</button>
          </form>
        ) : (
          <div className="employee-details text-lg flex flex-col justify-center align-center space-y-6">

            <p
      
            ><img
              className="rounded-full h-28 w-28 border-2 border-orange-600"
              src={employee.avatar} width={'120'} alt="Profile Image"/></p>
            <p><strong>Name: </strong> {employee.name}</p>
            <p><strong>Phone: </strong> {employee.phone}</p>
            <p><strong>Email: </strong> {employee.email}</p>
            <p><strong>Bio: </strong> {employee.bio}</p>
            <button onClick={toggleEditMode} className='bg-green-500 p-2 rounded-xl w-24'>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmpProfile;
