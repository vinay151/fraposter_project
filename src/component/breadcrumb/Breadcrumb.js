import React from 'react';
import { useNavigate } from 'react-router-dom';
const Breadcrumb=(props)=>{
    const navigate=useNavigate();
    function homeClick(event)
        {
       event.preventDefault();
       navigate("/")
        }
    
    return(
      
        <>
       <div className="container-fluid bg-[#FAF8FF] lg:px-48 py-6 mt-32  px-6">
       <nav className="rounded-md w-full ">
  <ol className="list-reset flex">
    <li><a href="/" className="text-blue-600 hover:text-blue-700 text-2xl" onClick={homeClick} >Home</a></li>
    <li><span className="text-gray-500 mx-2 text-2xl">/</span></li>
    <li className="text-gray-500 text-2xl"> {props.heading} </li>
  </ol>
</nav>
       </div>
        </>
    )
}
export default Breadcrumb;