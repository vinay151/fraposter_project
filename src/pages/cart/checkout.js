import React from 'react';
import Breadcrumb from '../../component/breadcrumb/Breadcrumb';
import { FaQuestionCircle } from 'react-icons/fa';
import a from '../../svg/cart.jpg';
// import b from '../../svg/twostick.PNG';
import {Link,useNavigate } from 'react-router-dom';

const Checkout=()=>{
    const navigate=useNavigate();
    function cartClick(event){
        event.preventDefault();
        navigate("/cart");
    }
    return(
        <>
    {/* <div className="container-fluid w-full">
  <img src={b} alt="" className='w-full h-40' />
    </div> */}
        <Breadcrumb heading="Payment" />
        <div className="container py-20 lg:px-32 px-4 ">
        <div className="flex flex-wrap justify-between ">
         <div className=" lg:w-1/2 w-full p-10 bg-black text-white" >
         <form>
                <div className="flex justify-between text-2xl flex-wrap">
                   <h1 className=''>Contact Information </h1> 
                   <p className=''>Already have an account? <small className='text-blue-500'>Log in</small> </p>
                </div>
                <div className="mt-3 text-2xl">
                    <input type="text" name="" id="" className='w-full px-4 py-5 border outline-purple-400 rounded' placeholder='Email' />
                    <input type="checkbox" name="" id="" className='mt-5' /> Email me with news and offers
                </div>
         
                   
            
               
             
  
  <h1 className='mb-3 text-2xl mt-8'>Shipping Address</h1>
    <select className="form-select appearance-none
      block
      w-full
      lg:px-3
      py-5
      
      text-3xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none" aria-label="Default select example">
        <option selected>Country/region</option>
        <option value="1">India</option>
       
    </select>


<div className="mt-5 text-2xl flex lg:space-x-4 lg:flex-nowrap flex-wrap">
    <input type="text" name="" id="" className='w-full py-5 px-4 border outline-purple-400 rounded' placeholder='First Name' /> 
    <input type="text" name="" id="" className='w-full py-5 lg:mt-0  mt-5 px-4 border outline-purple-400 rounded' placeholder='Last Name' /> 
</div>
<div className="mt-5 text-2xl">
    <input type="text" name="" id="" className='w-full py-5 px-4 border outline-purple-400 rounded' placeholder='Address' /> 
</div>
<div className="mt-5 text-2xl">
    <input type="text" name="" id="" className='w-full py-5 px-4 border outline-purple-400 rounded' placeholder='Apartment,suite,etc.(optional)' /> 
</div>
<div className="mt-5 flex lg:space-x-4 lg:flex-nowrap flex-wrap text-2xl">
    <input type="text" name="" id="" className='w-full py-5 px-4 border outline-purple-400 rounded' placeholder='City' /> 
 
             
 
  
    <select className="form-select appearance-none
      block
      w-full
      px-3
      lg:mt-0
      mt-5
      py-5
      text-2xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none" aria-label="Default select example">
        <option selected>State</option>
        <option value="1">India</option>
       
    </select>


    <input type="text" name="" id="" className='w-full lg:mt-0 mt-5 py-5 px-4 border outline-purple-400 rounded' placeholder='Pincode' /> 
</div>
<div className="mt-5 text-2xl">
    <input type="text" name="" id="" className='w-full py-5 px-4 border outline-purple-400 rounded' placeholder='Phone' /> 
</div>
<div className="mt-10 mb-10 flex justify-between lg:flex-nowrap flex-wrap">
   <button type='button' className='w-full py-5  bg-blue-400 text-white lg:text-2xl text-xl cursor-pointer rounded-lg'>Continue to shopping</button>
   <button type='button' className='w-full py-5  text-blue-500 cursor-pointer text-2xl' onClick={cartClick} > Return to cart </button>
</div>
<hr />
<div className=" mt-5">
    <ul className='flex lg:space-x-4 flex-wrap'>
        <li > <Link to='#' className='text-2xl text-blue-600'>Refund Policy</Link> </li>
        <li > <Link to='#' className='text-2xl text-blue-600'>Shipping Policy</Link> </li>
        <li > <Link to='#' className='text-2xl text-blue-600'>Privacy Policy</Link> </li>
        <li > <Link to='#' className='text-2xl text-blue-600'>Terms of service</Link> </li>
    </ul>

</div>
            </form>
         </div>
         <div className="border-l-2 border-gray-300 bg-[rgb(249,249,249)] lg:w-1/2 w-full p-10">
             <div className="flex justify-between items-center flex-wrap mb-8">
            <div className="flex items-center lg:space-x-4 text-2xl flex-wrap">
            <img src={a} alt="" className='w-24 h-24' />
            <p> Sticker </p><br />
            <p> 12 X 12 </p>
            </div>
                 <p className='text-2xl'> Rs. 249.00 </p>
             </div>
             <hr />
             <div className="mt-5 mb-5 flex  text-2xl flex-wrap">
             <input type="text" name="" id="" placeholder='Discount code' className='border outline-purple-400 px-4 w-full py-5 rounded '/>
             <button  className='border-none  mt-5 w-full lg:px-5 bg-gray-400 text-white   rounded py-5 '> Apply  </button>
             </div>
             <hr />
             <div className="flex items-center justify-between mt-5 mb-5 flex-wrap text-2xl ">
                 <p className=''>Subtotal</p>
                 <p className='text-black '>Rs. 249.00</p>
             </div>
             <div className="flex items-center justify-between text-2xl mt-5 mb-5 flex-wrap">
                 <p className=" flex items-center">Shipping  <FaQuestionCircle className='text-lg ml-2 cursor-pointer'/> </p>
                 <p className=""> Calculated at next step </p>
             </div>
             <hr />
             <div className="flex items-center justify-between mt-5 mb-5 flex-wrap">
                 <p className="text-3xl">Total</p>
                 <p className="text-2xl"> INR <small> Rs. 299.0 </small> </p>
             </div>
         </div>
        </div>
        </div>
        </>

    )
}
export default Checkout;