import { toast, Toaster } from "sonner";
import { useEffect, useRef, useState } from "react";
import Register from "../../components/Admin/Register/Register";
import axios from "axios";

function Manage() {
  const dialogRef = useRef();
  const deleteDialogRef = useRef();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [confirmationEmail, setConfirmationEmail] = useState("");

  const [detail, setDetail] = useState([
    {
      firstName: "gaurav",
      lastName: "ghuge",
      email: "gauravghuge@microsoft.com",
      _id: "gaurav423",
      status: "active",
    },
  ]);

  const getData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const response = await axios.get(
      "http://localhost:5200/api/v1/admin/getUsers",
      config
    );

    const data = response.data.data;
    setDetail(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteEmployee = async (email) => {
    if (confirmationEmail !== selectedEmployee.email) {
      toast.error("Email does not match. Please try again.");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };

    const body = {
      email: email,
    };

    const response = await axios.delete(
      "http://localhost:5200/api/v1/admin/deleteUser",
      { data: body }, // axios delete request accepts body as { data: body }
      config
    );

    if (response.data.success) {
      toast.success("Employee Deleted Successfully");
      getData(); // Refresh the data after deletion
      deleteDialogRef.current.close(); // Close the confirmation dialog
    } else {
      toast.error("Failed to delete employee. Please try again.");
    }
  };

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setConfirmationEmail(""); // Reset the confirmation email input
    deleteDialogRef.current.showModal();
  };

  const handleConfirmDelete = () => {
    deleteEmployee(selectedEmployee.email);
  };

  return (
    <div>
      <Toaster position="top-right" richColors closeButton expand={true} />
      <button
        onClick={() => dialogRef.current.showModal()}
        className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
      >
        Add Employee
      </button>
      <dialog
        ref={dialogRef}
        autoFocus
        className="transition-all rounded-lg p-3  w-96 lg:w-[40vw]"
      >
        <button
          className="absolute right-2 top-1 hover:font-bold"
          onClick={() => dialogRef.current.close()}
        >
          close
        </button>
        <Register />
      </dialog>

      <dialog
        ref={deleteDialogRef}
        className="transition-all rounded-lg p-3 w-96 lg:w-[40vw]"
      >
        <button
          className="absolute right-2 top-1 hover:font-bold"
          onClick={() => deleteDialogRef.current.close()}
        >
          close
        </button>
        <h3 className="text-lg font-bold">Confirm Deletion</h3>
        <p>
          Please enter the registered email of{" "}
          <strong>{selectedEmployee?.firstName}</strong> to confirm deletion:
        </p>
        <input
          type="email"
          value={confirmationEmail}
          onChange={(e) => setConfirmationEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full mt-2"
          placeholder="Enter registered email"
        />
        <button
          onClick={handleConfirmDelete}
          className="mt-4 bg-red-600 text-white p-2 rounded-lg"
        >
          Confirm Delete
        </button>
      </dialog>

      <br />
      <br />
      <ShowTable detail={detail} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

function ShowTable({ detail, handleDeleteClick }) {
  return (
    <div className="w-full border p-6 text-lg rounded-lg">
      <div className="grid font-bold text-gray-500 justify-center grid-cols-5 gap-x-36 mb-3 items-center">
        <h1>First Name</h1>
        <h1>Last Name</h1>
        <h1>Employee Id</h1>
        <h1>Email</h1>
        <h1>Modify / Delete</h1>
      </div>

      <div className="">
        <ShowTableData DataObject={detail} handleDeleteClick={handleDeleteClick} />
      </div>
    </div>
  );
}

function ShowTableData({ DataObject, handleDeleteClick }) {
  // Ensure DataObject is always an array
  if (!Array.isArray(DataObject)) {
    return null;
  }

  return (
    <div>
      {DataObject.map((data, i) => (
        <div
          className="grid items-center justify-center grid-cols-5 gap-x-36 auto-cols-auto py-5 border border-r-0 border-l-0 border-b-0 my-0"
          key={i}
        >
          <h2 className="mx-4">{data.firstName}</h2>
          <h2>{data.lastName}</h2>
          <h2 className="text-center w-20">{data._id}</h2>
          <h2>{data.email}</h2>
          <button
            onClick={() => handleDeleteClick(data)}
            className="hover:bg-red-600 w-24 p-2 rounded-3xl"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Manage;