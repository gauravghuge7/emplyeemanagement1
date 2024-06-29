
import {serverUrl} from "../../Url/url.backend.js"
import { useState } from "react";
import { toast, Toaster } from "sonner";
import axios from "axios";

function EmpDailyReport() {
  const [report, setReport] = useState("");
  const [projectName, setProjectName] = useState(""); // New state for project name
  const [workUrl, setWorkUrl] = useState(""); // New state for work URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle daily report submission logic

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const body = {
      projectName, // Include project name in the request body
      workUrl, // Include work URL in the request body
      report,
    };

    try {
      const response = await axios.post(
        `${serverUrl || "http://localhost:5200" }/api/v1/user/dailyReport`,
        body,
        config
      );

      console.log(response);

      const data = response.data;

      console.log(data);

      if (data.success) {
        
        toast.success(data.message);
        setProjectName(""); // Clear the input after successful submission
        setWorkUrl(""); // Clear the input after successful submission
        setReport(""); // Clear the textarea after successful submission
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      toast.error("Failed to submit report");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto rounded-lg shadow-lg bg-gray-300">
      <Toaster richColors={true} closeButton={true} />
      <h2 className="text-2xl font-bold mb-4 text-center">Daily Report</h2>

      <form onSubmit={handleSubmit}>
        {/* Project name input field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project name"
            required
          />
        </div>

        {/* Work URL input field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Todays Work URL:</label>
          <input
            type="url"
            value={workUrl}
            onChange={(e) => setWorkUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Provide today's work URL"
            required
          />
        </div>

        {/* Report textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Daily Report:</label>
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Explain about today's work"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmpDailyReport;
