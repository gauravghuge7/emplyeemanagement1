
import { useState } from "react";
import AdminContext from "./context.js";

function AdminContextProvider ({ children })  {

    const [admin, setAdmin] = useState("");
    const {email, setEmail} = useState("");
    const [phone, setPhone] = useState("");

    return (
        <AdminContext.Provider value={{admin, setAdmin, email, setEmail, phone, setPhone}}>
        

            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;
