import { useState, useRef } from 'react';
import { toast, Toaster } from 'sonner'
import { AddTask } from '../../components/task/Task';

function EmpDailyReport() {
  const [report, setReport] = useState("");

  const [tasks, setTasks] = useState([{
    projectname: "",
    tasktitle: "",
    departement: "",
    description: "",
    date:""
  }])

  const dialogRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle daily report submission logic
    dialogRef.current.close()
    toast.success('Add Employee')
    console.log("Daily report submitted:", report);
  };

  return (
    <div className='bg-slate-100 bg-gradient-to-r from-blue-400 to-purple-400'>
      <Toaster richColors={true} closeButton={true} />
      <h2 className="text-2xl font-bold mb-4">Daily Report</h2>
      <div   >
        <div className="mb-4">
          <label className="block text-gray-700">Daily Report:</label>
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className='space-x-24'>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Report
          </button>
          <button
            onClick={() => dialogRef.current.showModal()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add task
          </button>

          <dialog ref={dialogRef} className=" transition-all rounded-lg p-3  w-96 lg:w-[900px] lg:translate-x-56">
            <button className="absolute right-2 top-1 hover:font-bold" onClick={() => dialogRef.current.close()}>close</button>

            <div className=' w-full '>
              <AddTask setTasks={setTasks} dialogRef={dialogRef} tasks={tasks} />
            </div>

          </dialog>
        </div>


        <div className='space-y-9 mt-10'>
          {tasks.map((task, i) => {
            return  task.projectname !== ""|null ?
              <div key={i} className='space-y-2 border border-blue-400 hover:scale-105 transition-all hover:border-blue-700 rounded-lg p-3'>
                <h1 className='text-2xl font-semibold'>Project Name: <span className='font-normal '>{task.projectname}</span></h1>
                <h1 className='text-2xl font-semibold'>Task Name: <span className='font-normal '>{task.tasktitle}</span></h1>
                <h1 className='text-2xl font-semibold'>Departement Name: <span className='font-normal '>{task.departement}</span></h1>
                <h1 className='text-2xl font-semibold'>Description: <span className='font-normal '>{task.description}</span></h1>
                <div className='flex justify-end'>
                  <span className=''>{task.date.slice(0,25)}</span>
                </div>
              </div>:""
          })}
        </div>
      </div>
    </div>
  );
}

export default EmpDailyReport;
