
import { useState } from "react";
import AdminContext from "./context.js";

function AdminContextProvider ({ children })  {

    const [login, setLogin] = useState("");

    return (
        <AdminContext.Provider value={{login, setLogin}}>
        

            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;
