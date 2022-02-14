import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaPinterestP, FaShare, FaTwitter, FaWhatsapp, FaYoutube, FaLinkedinIn  } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid py-12 px-12 bg-[#252525]">
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center">
         <div className="text-white ">
          
             <h1 className="text-3xl font-bold">FRAPOSTER</h1>
             <p className="mt-5 text-xl font-semibold"> Custom Print Store </p>
         
           <p className="flex items-center mt-5"> <FaEnvelope/> <small className="ml-2 text-xl">@Support@fraposter.com</small> </p>
           <p className="flex items-center mt-2"> <FaPhoneAlt/> <small className="ml-2 text-xl"> +917895626555 </small> </p>
           <div className="flex items-center space-x-6 mt-5">
                 
                    <p className='bg-gray-300 text-black rounded-xl cursor-pointer hover:bg-blue-900 p-2 hover:text-white'> <FaFacebook className='text-xl '/> </p>
                    <p className='bg-gray-300 text-black rounded-xl cursor-pointer p-2 hover:bg-cyan-500 hover:text-white'> <FaTwitter  className='text-xl '/> </p>
                    <p className='bg-gray-300 text-black rounded-xl cursor-pointer p-2 hover:bg-red-900 hover:text-white'> <FaPinterestP  className='text-xl '/> </p>
                    <p className='bg-gray-300 text-black rounded-xl cursor-pointer p-2 hover:bg-red-600 hover:text-white'> <FaYoutube  className='text-xl '/> </p>
                    <p className='bg-gray-300 text-black rounded-xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <FaLinkedinIn  className='text-xl '/> </p>
                 </div>
         </div>
   
           
           <div className="text-white ">
           <h1 className="text-2xl font-semibold">Quick Links</h1>
            <ul className="py-3">
              <li className="py-2"> <a href="to" > Search </a> </li>
              <li className="py-2"> <a href="to" > Review </a> </li>
              <li className="py-2"> <a href="to" > Contact Us </a> </li>
              <li className="py-2"> <a href="to" > Track Your Order </a> </li>
              <li className="py-2"> <a href="to" > Shippping Policy </a> </li>
              <li className="py-2"> <a href="to" > Refund Policy </a> </li>
              <li className="py-2"> <a href="to" > Privacy Policy </a> </li>
              <li className="py-2"> <a href="to" > Terms Of Service </a> </li>
            </ul>
           </div>
         <div className="text-white w-full">
         <h1 className="text-2xl font-semibold"> Subscribe to our newsletter </h1>
         <p className="py-5">Promotions, Offers and new arrivals directly to your <br /> Inbox</p>
         <input type="text"  className="w-full pl-3 py-2 mt-4 rounded-lg outline-none border-0 bg-black text-white text-base" placeholder="First Name"/> <br />
         <input type="email" className="w-full pl-3 py-2 rounded-lg outline-none border-0 mt-3 bg-black text-white text-base" placeholder="Your Email" />
        <div className="flex items-center mt-4 ml-3">
        <input type="checkbox"  />
          <p className="ml-2"> Email me with news and offers </p>
        </div>
        <div className="">
          <button type="submit" className="w-full bg-orange-500 flex items-center justify-center  py-4 mt-6 rounded-lg text-black text-base font-semibold "> <FaEnvelope className="text-xl"/>   Subscribe  </button>
        </div>
         </div>
        </div>
        <hr className="w-full"/>
        <div className="mt-10 text-white text-center">
          <h2 className="text-xl"> Copyright &copy; 2022 All Rights Reserve @Fraposter </h2>
        </div>
      </div>
     
     
    
    </>
  );
};
export default Footer;
