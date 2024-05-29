import React, { useState } from 'react';

function EmpLeaveApplication() {
  const [application, setApplication] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle leave application logic
    console.log("Leave application submitted:", application);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Application for Leave</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Leave Application:</label>
          <textarea 
            value={application} 
            onChange={(e) => setApplication(e.target.value)} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default EmpLeaveApplication;
