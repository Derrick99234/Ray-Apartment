import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from '../page/homePage/Home'
import ErrorPage from '../page/ErrorPage';
import Travel from '../page/travelTips/Travel';
import Contact from '../page/contactPage/Contact';
import Accommodate from '../page/accommodationPage/Accommodate';


const pages =createBrowserRouter([
    {path: "/", element: <Home />},
    {path:"*", element: <ErrorPage/>}, 
    {path:"/aboutus", element: <Travel/>},
    {path:"/contacts", element:<Contact/>},
    {path:"/accommodation", element:<Accommodate/>}
    
])

export default function index() {
  return (
    <RouterProvider router={pages} />
  )
}