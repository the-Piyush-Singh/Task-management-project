import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
  
// import Login from './Components/Login'
// import Register from './Components/Register'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />

            {/* <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

  

  