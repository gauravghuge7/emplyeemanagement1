import { toast, Toaster } from "sonner"
import { useRef, useState } from "react"
import Register from "../Register/Register";


let data = [{
  name: "sharad",
  email: "sajdfk",
  id: "ajd;f",
  status:"active"
}, {
  name: "nikhil",
  email: "nikhil@gmail.oc",
  id: "32",
  status:"active"
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
        
        <Register />

      </dialog>
      <br />
      <br />
      
      <ShowTable />
    </div>
  )
}

function ShowTable() {
  return <div className="w-full border p-6 text-lg rounded-lg">
    <div className="grid font-bold text-gray-500  grid-cols-5 mb-3">
      <h1>Name</h1>
      <h1>Id</h1>
      <h1>Email</h1>
      <h1>Status</h1>

    </div>
    <div>

      <ShowTabeData DataObject={data} />
    </div>
  </div>
}


function ShowTabeData({ DataObject }) {
  
  return <div>
    {DataObject.map((data, i) => {
      return <div className="grid items-center grid-cols-5 py-5 -mx-3 px-3 border border-r-0 border-l-0 border-b-0  my-0" key={i}>
        <h2>{data.name}</h2>
        <h2>{data.id}</h2>
        <h2>{data.email}</h2>
        <h2>{data.status}</h2>
        <button  className="hover:bg-red-600 w-24 p-2  rounded-3xl">delete</button>
      </div>

    })}
  </div>

}

export default Manage
