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
       <div className="container-fluid bg-[#FAF8FF] lg:px-32 lg:py-2 px-4">
       <nav class="rounded-md w-full ">
  <ol class="list-reset flex">
    <li><a href="/" class="text-blue-600 hover:text-blue-700" onClick={homeClick} >Home</a></li>
    <li><span class="text-gray-500 mx-2">/</span></li>
    <li class="text-gray-500"> {props.heading} </li>
  </ol>
</nav>
       </div>
        </>
    )
}
export default Breadcrumb;