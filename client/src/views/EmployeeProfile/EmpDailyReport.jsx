import React, { useState } from 'react';

function EmpDailyReport() {
  const [report, setReport] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle daily report submission logic
    console.log("Daily report submitted:", report);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Daily Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Daily Report:</label>
          <textarea 
            value={report} 
            onChange={(e) => setReport(e.target.value)} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}

export default EmpDailyReport;
