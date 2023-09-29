import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Navbar from './components/Navbar/Navbar.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Donation from './components/Donation/Donation.jsx';
import DonationDetail from './components/Donation_detail/DonationDetail.jsx';
import Error from './components/404_Not_found/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/donation-detail-page/:id",
        element: <DonationDetail></DonationDetail>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch('/data.json')
      }
      ,
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: ()=>fetch('/data.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
