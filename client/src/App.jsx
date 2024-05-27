import Employee from "./employee/Employee"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ForgotPass from "./employee/ForgotPass"
import Signup from "./components/signup/Signup"
import Task, { AddTask } from "./components/task/Task"


function App() {
  

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/emp-login" element={<Employee/>} />

        <Route path="/" element={<Signup/>} />

        <Route path="/task" element={<Task/>} />
        <Route path="/AddTask" element={<AddTask/>} />
        
        <Route path="/forgot-password" element={<ForgotPass/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
