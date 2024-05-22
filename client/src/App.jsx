import Employee from "./employee/Employee"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ForgotPass from "./employee/ForgotPass"


function App() {
  

  return (
    <>
    <BrowserRouter>
    
      <Routes>
      <Route path="/emp-login" element={<Employee/>} />
     <Route path="/forgot-password" element={<ForgotPass/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
