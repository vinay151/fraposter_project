import React from 'react';
import pic from '../../svg/pic-1.png'; 

const MessagePopup=()=>{
    return(
        <>
<div className="absolute  top-64 lg:right-96 right-32 z-20   bg-white shadow-lg lg:w-1/4 w-3/4 p-4 ">
            <h2 className='text-3xl mb-3 text-black font-semibold'>Messages</h2>
            <hr />
            <div className="flex items-center space-x-8 my-5">
                <div className=""> <img src={pic} alt="" className='w-20 h-20 rounded-full' /> </div>
               <div className="">
               <h2 className='text-2xl'>Mark send you a message </h2>
                <p className='text-xl'>1 minute ago</p>
                   </div>
                </div>
                <hr />
                <div className="flex items-center  space-x-8 my-5">
                <div className=""> <img src={pic} alt="" className='w-20 h-20 rounded-full' /> </div>
              <div className="">
              <h2 className='text-2xl'>Mark send you a message </h2>
                <p className='text-xl'>15 minute ago</p>
                  </div>
                </div>
                <hr />
                <div className="flex items-center  space-x-8 my-5">
                <div className=""> <img src={pic} alt="" className='w-20 h-20 rounded-full' /> </div>
               <div className=""> 
               <h2 className='text-2xl'>Mark send you a message </h2>
                <p className='text-xl'>20 minute ago</p>
                </div>
                </div>
            <hr />
            <h2 className='text-2xl text-center my-5 font-bold'> 4 new messages </h2>
               </div>
        </>
    )
}
export default MessagePopup;