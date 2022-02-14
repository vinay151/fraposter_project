import React from 'react';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import {FaStar} from 'react-icons/fa';
import r from '../svg/twostick.PNG';
import { useNavigate } from 'react-router-dom';
const Review =()=>{
  const navigate=useNavigate();
  function reviewClick(event){
    event.preventDefault();
    navigate("/form");
  }
   const reviewData=[
     {
       head:"There's a reason they're number one",
       subhead:"15-02-2022",
       para:"There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.",
       name:"Honda Mclaren MP4/4"
     },
     {
      head:"Amazing Stuff",
      subhead:"16-02-2022",
      para:"Max Verstappen - Unleash the Lion",
      name:"Enzo Ferrari Quote"
    },
    {
      head:"Great Quality",
      subhead:"17-02-2022",
      para:"If you are looking for a great poster with high quality you are in the right place. The picture quality is crazy good",
      name:"Senna Honda Mclaren MP4/4"
    }
   ]
    return(
        <>
        <Breadcrumb heading="Review"/>
        <div className="container-fluid py-20 px-32">
        <h1 className='text-4xl font-extrabold'>REVIEW</h1>
        <div className="border-2 ">
          <div className="flex justify-between">
        <div className="p-4">
        <div className="flex space-x-1">
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
             
                </div> 
        <h1 className='mt-1 text-lg'>Based on 40 review</h1>
        </div>
        <div className="p-4">
          <button className='py-3 px-6 border-2' onClick={reviewClick}> Write a Review </button>
        </div>
        </div>
        <div className="flex justify-between">
          <h6 className='p-4 mt-10 text-lg '>Product Review (33) </h6>
     
          <div className="p-4">
            <select name="" id="" className='border-2 py-1 px-2 rounded-md'>
              <option value=""> Most Recent </option>
            </select>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 m-4 space-x-4 ">
          {
            reviewData.map((e,i)=>{
              return(
                <>
 <div className="border-2 p-4 bg-[#FAFAFA]">
          <div className="flex  justify-between">
                <p className='flex space-x-1'><FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm '/></p>
                <p>{e.subhead}</p>
                </div> 
            
                <h1 className='text-lg font-bold mt-3'>{e.head}</h1>
                <p className='text-base mt-3'>{e.para}</p>
                <div className="flex items-center space-x-4 mt-5">
                  <img src={r} alt="" className='w-12 h-12 rounded-full' />
                  <h1 className='text-lg'>{e.name}</h1>
                </div>
          </div>
                </>
              )
            })
          }
         
       
        </div>
        </div>
        </div>


{/* function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
} */}





    
    </>

    )
}
export default Review;