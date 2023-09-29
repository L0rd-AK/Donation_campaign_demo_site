import './App.css'
import Navbar from '../src/components/Navbar/Navbar.jsx'
import { Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
function App() {
  

  return (
    <>
      <div className='w-full'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
