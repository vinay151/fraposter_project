import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard=()=>{
    return(
        <>
     <div className="container-fluid  mt-32">
       <nav className='h-20 px-10 bg-blue-600 flex items-center sticky top-0 left-0 z-20'>
           <div className="">
               <h1 className='text-4xl font-bold'>Fraposter</h1>
           </div>
       </nav>
      <div className="flex space-x-4">
      <div className='w-80 h-auto border-r'>
        <ul className='bg-white shadow-xl px-8 '>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa fa-home mr-2" aria-hidden="true"></i> Home </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa fa-home mr-2" aria-hidden="true"></i> Categories </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa-solid fa-cart-shopping mr-2"></i> Products </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa-solid fa-phone mr-2"></i> Orders </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa-solid fa-gear mr-2"></i> Setting </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa fa-power-off mr-2" aria-hidden="true"></i>  Logout </Link> </li>
       
        </ul>
       </div>
       <div className="text-2xl">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil?</p>
       </div>
      </div>
     </div>
        </>
    )
}
export default Dashboard;