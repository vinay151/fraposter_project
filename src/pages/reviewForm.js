import React from 'react';
import {FaStar} from 'react-icons/fa';
const ReviewForm=()=>{
    return(
        <>
       <div className="container  py-5">
        <div className=" p-4">
            <form >
              
                   <div className=""> <label htmlFor="name">Name </label></div>
                    <div className="mt-1">
                    <input type="text" name="" id="" className='border-2 w-full py-4 lg:px-4 bg-[#F2ECFF] rounded-md' placeholder='Enter Your Name' />
                </div>
                <div className="mt-5"> <label htmlFor="name">Email </label></div>
                    <div className="mt-1">
                    <input type="email" name="" id="" className='border-2 w-full py-4 px-4 bg-[#F2ECFF] rounded-md' placeholder='Enter Your Email' />
                </div>
                <div className="mt-5"> <label htmlFor=""> Rating </label> </div>
               
                <div className="flex space-x-1 mt-1">
                <FaStar className='lg:text-xl  text-sm text-orange-500 '/>
                <FaStar className='lg:text-xl  text-sm text-orange-500 hover:text-black'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500 hover:text-black'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500 hover:text-black'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500 hover:text-black'/>
             
                
                </div>
                <div className="mt-5"> <label htmlFor="name">Review Title </label></div>
                    <div className="mt-1">
                    <input type="text" name="" id="" className='border-2 w-full py-4 px-4 bg-[#F2ECFF] rounded-md' placeholder='Give your review a title' />
                </div>
                <div className="mt-5"> <label htmlFor="name">Review </label></div>
                    <div className="mt-1">
                   <textarea name="" id=""  rows="5" className='w-full border-2 bg-[#F2ECFF] px-4 py-4 rounded-md' placeholder='Write your comment here'></textarea>
                </div>
                <div className="mt-5">
                    <label htmlFor=""> Picture </label> <br />
                    <input type="file" name="" id="" className='border-2 w-full px-4 py-20'/>
                </div>
                <div className="mt-5">
                    <input type="text" name="" id="" className='border-2 w-full py-4 px-4 bg-[#F2ECFF] rounded-md' placeholder='Youtube Url' />
                </div>
                <div className="mt-5">
                   <button className='px-6 py-4 bg-orange-600 rounded-md text-white text-lg font-semibold'> Submit Review </button>
                </div>
            </form>
        </div>
       </div>
        </>
    )
}
export default ReviewForm;