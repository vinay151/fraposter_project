import React from 'react'
import {FaCog,FaCalendarDay,FaLink} from 'react-icons/fa';
const NotiPopup = () => {
  return (
    <>
    <div className="absolute  top-64 lg:right-72 -right-8 z-20   bg-white shadow-lg lg:w-1/4 w-full p-4 ">
            <h2 className='text-3xl mb-3 text-black font-semibold'> Notification </h2>
            <hr />
            <div className="flex items-center space-x-8 my-5">
                <div className="w-20 h-20 bg-green-300 flex items-center justify-center rounded-full"> <FaCalendarDay className='text-4xl text-white'/> </div>
               <div className="">
               <h2 className='text-2xl'> Event Today </h2>
                <p className='text-xl'> Just a reminder that you have </p>
                   </div>
                </div>
                <hr />
                <div className="flex items-center  space-x-8 my-5">
                <div className="bg-yellow-400 rounded-full w-20 flex items-center justify-center h-20"> <FaCog className="text-white text-4xl"/> </div>
              <div className="">
              <h2 className='text-2xl'> Settings </h2>
                <p className='text-xl'> Update Dashboard </p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center  space-x-8 my-5">
                <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center "> <FaLink className="text-white text-4xl"/>  </div>
               <div className=""> 
               <h2 className='text-2xl'> Launch Admin </h2>
                <p className='text-xl'> New Admin </p>
                </div>
                </div>
            <hr />
            <h2 className='text-2xl text-center my-5 font-bold'> See all notification </h2>
               </div>
    </>
  )
}

export default NotiPopup