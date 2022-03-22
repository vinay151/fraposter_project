
import React from 'react';
import { useNavigate } from 'react-router-dom';
const RightPopup=()=>{
    const navigate = useNavigate;
    const handleClick = (event)=>{
    navigate("/chat");
    event.preventDefault();

    }
    return(
        <>
        <div className="lg:w-1/4 w-full shadow-md lg:right-2 -right-40 z-20 bg-white absolute">
        <div className="flex p-6 space-x-6 items-center bg-purple-400 justify-center">
           <h1 className='text-2xl cursor-pointer text-white'>TO DO LIST</h1>
           <h1 className='text-2xl cursor-pointer text-white' onClick={handleClick} >CHATS</h1>
        </div>
        <div className="p-4">
            <h1 className='text-2xl font-semibold'>To Do List</h1>
            <div className="mt-5">
              <input type="text" name="" id="" className='border outline-none text-2xl rounded-md px-4 py-4' />  <button className='px-10 text-2xl py-4 border  lg:m-0 mt-3 rounded-md border-purple-400'> Add </button>
            </div>
        </div>
        </div>
        </>
    )
}
export default RightPopup;