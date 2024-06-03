import React, { useState, useEffect } from 'react';
import './Report.css'; // Import CSS for styling

const DailyReport = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({ employeeName: '', reportContent: '' });

  useEffect(() => {
    // Fetch daily reports from an API (placeholder function)
    fetchReports();
  }, []);

  const fetchReports = () => {
    // Placeholder data, replace with API call
    const data = [
      { id: 1, date: '2024-06-01', employeeName: 'John Doe', reportContent: 'Completed task A', status: 'Pending' },
      { id: 2, date: '2024-06-01', employeeName: 'Jane Smith', reportContent: 'Worked on project B', status: 'Pending' },
      // Add more reports as needed
    ];
    setReports(data);
  };

  const markAsReviewed = (id) => {
    setReports(reports.map(report =>
      report.id === id ? { ...report, status: 'Reviewed' } : report
    ));
  };

  const deleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport({ ...newReport, [name]: value });
  };

  const addReport = (e) => {
    e.preventDefault();
    const report = {
      id: reports.length + 1,
      date: new Date().toISOString().split('T')[0],
      employeeName: newReport.employeeName,
      reportContent: newReport.reportContent,
      status: 'Pending'
    };
    setReports([...reports, report]);
    setNewReport({ employeeName: '', reportContent: '' });
  };

  return (
    <div className="report-container">
      <h2>Daily Reports</h2>
      <form onSubmit={addReport}>
        <input
          type="text"
          name="employeeName"
          value={newReport.employeeName}
          onChange={handleInputChange}
          placeholder="Employee Name"
          required
        />
        <textarea
          name="reportContent"
          value={newReport.reportContent}
          onChange={handleInputChange}
          placeholder="Report Content"
          required
        ></textarea>
        <button type="submit">Add Report</button>
      </form>
      <ul>
        {reports.map(report => (
          <li key={report.id} className={report.status.toLowerCase()}>
            <h3>{report.employeeName}</h3>
            <p>{report.reportContent}</p>
            <span>{report.date}</span>
            <div>
              {report.status === 'Pending' && <button onClick={() => markAsReviewed(report.id)}>Mark as Reviewed</button>}
              <button onClick={() => deleteReport(report.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyReport;
