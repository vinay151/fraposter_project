import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaPinterestP, FaTwitter,  FaYoutube, FaLinkedinIn  } from "react-icons/fa";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid py-12 px-12 bg-[#252525]">
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center">
         <div className="text-white w-full lg:w-auto">
          
             <h1 className="text-6xl font-bold">FRAPOSTER</h1>
             <p className="mt-5 text-3xl font-semibold"> Custom Print Store </p>
         
           <p className="flex items-center mt-5"> <FaEnvelope className="text-2xl"/> <small className="ml-2 text-2xl">@Support@fraposter.com</small> </p>
           <p className="flex items-center mt-2"> <FaPhoneAlt className="text-2xl"/> <small className="ml-2 text-2xl"> +917895626555 </small> </p>
           <div className="flex items-center space-x-6 mt-5">
                 
                    <p className='  rounded-xl cursor-pointer bg-blue-900 p-2 text-white'> <FaFacebook className='text-3xl '/> </p>
                    <p className='  rounded-xl cursor-pointer p-2 bg-cyan-500 text-white'> <FaTwitter  className='text-3xl '/> </p>
                    <p className='  rounded-xl cursor-pointer p-2 bg-red-900 text-white'> <FaPinterestP  className='text-3xl '/> </p>
                    <p className='  rounded-xl cursor-pointer p-2 bg-red-600 text-white'> <FaYoutube  className='text-3xl '/> </p>
                    <p className='  rounded-xl cursor-pointer p-2 bg-blue-500 text-white'> <FaLinkedinIn  className='text-3xl '/> </p>
                 </div>
         </div>
   
           
           <div className="text-white mt-5 lg:mt-0 lg:w-auto w-full ">
           <h1 className="text-3xl font-semibold">Quick Links</h1>
            <ul className="py-3">
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Search </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Review </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Contact Us </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Track Your Order </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Shippping Policy </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Refund Policy </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Privacy Policy </a> </li>
              <li className="py-2"> <a href="#" className="text-2xl hover:text-orange-500"> Terms Of Service </a> </li>
            </ul>
           </div>
         <div className="text-white  w-full">
         <h1 className="text-3xl font-semibold"> Subscribe to our newsletter </h1>
         <p className="py-5 text-xl">Promotions, Offers and new arrivals directly to your <br /> Inbox</p>
         <input type="text"  className="w-full pl-3 py-3 mt-4 rounded-lg outline-none border-0 bg-black text-white text-xl" placeholder="First Name"/> <br />
         <input type="email" className="w-full pl-3 py-3 rounded-lg outline-none border-0 mt-3 bg-black text-white text-xl" placeholder="Your Email" />
        <div className="flex items-center mt-4 ml-3">
        <input type="checkbox"  />
          <p className="ml-2 text-xl" > Email me with news and offers </p>
        </div>
        <div className="">
          <button type="submit" className="w-full bg-orange-500 flex items-center justify-center  py-6 mt-6 rounded-lg text-black text-2xl font-semibold "> <FaEnvelope className="text-2xl mr-2"/>   Subscribe  </button>
        </div>
         </div>
        </div>
        <hr className="w-full lg:mt-0 mt-5"/>
        <div className="mt-10 text-white text-center">
          <h2 className="text-2xl"> Copyright &copy; 2022 All Rights Reserve @Fraposter </h2>
        </div>
      </div>
     
     
    
    </>
  );
};
export default Footer;
