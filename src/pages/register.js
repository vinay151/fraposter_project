import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaPinterestP, FaTwitter,  FaYoutube, FaLinkedinIn  } from "react-icons/fa";
// import Breadcrumb from '../component/breadcrumb/Breadcrumb';
const Register=()=>{
    return(
        <>
        <div className="container mt-32 py-20 px-36">
          <div className="text-center">
            <h1 className='text-5xl text-black font-bold'>Create Account</h1>
          </div>
          
          <div className="flex flex-wrap mt-20">
            <div className="lg:w-1/2 border  w-full flex justify-center items-center regi  shadow-md ">
              <div className="text-white mt-20">
              <h1 className='text-5xl font-extrabold'>Welcome To Fraposter</h1>
              <p className='text-3xl text-center '>Are you ready to join</p>
              <div className="flex mt-96 justify-between ">
                 
                 <p className='  rounded-xl cursor-pointer bg-blue-900 p-2 text-white'> <FaFacebook className='text-3xl '/> </p>
                 <p className='  rounded-xl cursor-pointer p-2 bg-cyan-500 text-white'> <FaTwitter  className='text-3xl '/> </p>
                 <p className='  rounded-xl cursor-pointer p-2 bg-red-900 text-white'> <FaPinterestP  className='text-3xl '/> </p>
                 <p className='  rounded-xl cursor-pointer p-2 bg-red-600 text-white'> <FaYoutube  className='text-3xl '/> </p>
                 <p className='  rounded-xl cursor-pointer p-2 bg-blue-500 text-white'> <FaLinkedinIn  className='text-3xl '/> </p>
              </div>
              </div>
              
            </div>
            <div className="lg:w-1/2 bg-gradient-to-t from-orange-400 to-sky-400  w-full py-16 px-8 shadow-md" >
            <form >
              <div className="">
                <label htmlFor="name" className='text-2xl'>Full Name</label> <br />
                <input type="text"  className='appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
              </div>
              <div className="mt-5">
                <label htmlFor="number" className='text-2xl'>Phone Number</label> <br />
                <input type="number"  className='appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
              </div>
              <div className="mt-5">
                <label htmlFor="email" className='text-2xl'>Email</label> <br />
                <input type="email"  className='appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
              </div>
              <div className="mt-5">
                <label htmlFor="password" className='text-2xl'>Password</label> <br />
                <input type="password"  className='appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
              </div>
              <div className="mt-5">
                <label htmlFor="cpassword" className='text-2xl'>Confirm Password</label> <br />
                <input type="password"  className='appearance-none block w-full bg-gray-200 text-2xl text-black border border-gray-200 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
              </div>
              <div className="mt-16 flex space-x-6">
                <button type='button' className='border-2 border-blue-600 text-2xl rounded-lg  cursor-pointer px-20 py-5 text-white bg-blue-600 hover:bg-transparent hover:text-black'> Register </button>
                <button type='button' className='underline  text-2xl rounded-lg  cursor-pointer px-20 py-5 text-white  hover:text-black'> I am already a member </button>
               
              </div>
            </form>
            </div>
          </div>
        </div>
       
        </>
    )
}
export default Register;