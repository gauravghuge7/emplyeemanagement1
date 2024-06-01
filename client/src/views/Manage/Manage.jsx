import { toast, Toaster } from "sonner"
import { useRef, useState } from "react"


let data = [{
  name: "sharad",
  email: "sajdfk",
  id: "ajd;f"
}, {
  name: "nikhil",
  email: "nikhil@gmail.oc",
  id: "32"
}]

function Manage() {

  const dialogRef = useRef();
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [email, setEmail] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Add Employee')
    dialogRef.current.close()
    data.push({
      name,
      id, email
    })
    setName("")
    setId("")
    setEmail("")
  }
  return (
    <div>
      <Toaster position="top-right" richColors closeButton expand={true} />
      <button onClick={() => dialogRef.current.showModal()} className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
        Add Employee
      </button>
      <dialog ref={dialogRef} autoFocus className="transition-all rounded-lg p-3  w-96 lg:w-[40vw]">
        <button className="absolute right-2 top-1 hover:font-bold" onClick={() => dialogRef.current.close()}>close</button>
        <form onSubmit={handleSubmit} className="grid grid-cols-5 mt-10 gap-6">

          <div className="flex font-bold flex-col col-span-1 justify-between">

            <label htmlFor="employeeName">Name</label>
            <label htmlFor="employeeId">Id</label>
            <label htmlFor="employeeEmail">Email</label>
          </div>
          <div htmlFor="" className="flex flex-col col-span-4 gap-5">
            <input value={name} required onChange={(e) => setName(e.target.value)} type="text" className=" border-gray-500 border rounded-lg p-2" name="" id="employeeName" />
            <input value={id} required onChange={(e) => setId(e.target.value)} type="text" className=" border-gray-500 border rounded-lg p-2" name="employeeId" id="employeeId" />
            <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" className=" border-gray-500 border rounded-lg p-2" name="employeeEmail" id="employeeEmail" />
          </div>

          <button className="bg-blue-600 hover:scale-[101%]  hover:bg-blue-700 hover:font-bold p-3 rounded-xl mt-5 col-span-6">Add</button>
        </form>

      </dialog>
      <br />
      <br />
      <ShowTable />
    </div>
  )
}

function ShowTable() {
  return <div className="w-full border p-6 text-lg rounded-lg">
    <div className="grid font-bold  grid-cols-4">
      <h1>Name</h1>
      <h1>Id</h1>
      <h1>Email</h1>

    </div>
    <div>

      <ShowTabeData DataObject={data} />
    </div>
  </div>
}


function ShowTabeData({ DataObject }) {
  return <div>
    {DataObject.map((data, i) => {
      return <div className="grid grid-cols-4 py-2 -mx-3 px-3 rounded-lg border my-3" key={i}>
        <h2>{data.name}</h2>
        <h2>{data.id}</h2>
        <h2>{data.id}</h2>
        <button>delete</button>
      </div>

    })}
  </div>

}

export default Manage
