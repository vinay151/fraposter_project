import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
const About=()=>{
  return(
    <>
    <Breadcrumb heading="About Us"/>
  <div className="container py-16">
  <div className="lg:w-10/12 md:w-full lg:mx-auto mx-4">
  <div className="text-center">
   <h2 className='text-7xl font-bold' data-aos="fade-down">About us</h2>
    <h4 className='text-4xl font-semibold mt-8' data-aos="fade-down">CUSTOM STORE</h4>
   </div>
   <div className=" mt-5 lg:ml-32 md:ml-0">
     <h1 className='text-2xl font-semibold ' data-aos="fade-down">WHO WE ARE</h1>
     <p className=' leading-relaxed text-lg mt-4 ' data-aos="fade-down">Hey there! Thanks for visiting our website. We are Link small team dedicated to bringing you fans the most unique and interesting medium of pop culture artwork. Frameo store provides you with best quality glossy matte posters, framed posters, T-shirts and stickers of your favorites. For the fans in you whether of motorsports, Anime, F1, superheroes, sports, series, fiction, or other, get amazing illustrations crafted with best hands. 
Do give us the feedback about the products we offer and any suggestions or ideas that would like to see. </p>
   
 
  
   <h1 className='text-2xl font-bold mt-5' data-aos="fade-down">JOIN AS AN ARTIST</h1>
     <p className=' text-lg mt-3'>We support independent Artists!</p>
     <p className=' text-lg mt-8'>If you believe in your art and want it to be shared in form of poster which inspires others,  we invite you to join us. </p>
   <h1 className='text-2xl font-bold mt-5' data-aos="fade-down">CONTACT US</h1>
   <p className='text-lg mt-3'>You can call or email us at anytime.</p>
   <Link to="#" className='underline text-red-500 text-lg mt-4'> support@frameo.store </Link>
   <p className='text-lg mt-4'> Pune, MH 411048 </p>
   <p className='text-lg mt-4'>If you want any of your ideas, custom pictures or posters to be framed and delivered to you with best quality, do leave us Link note.</p>
   </div>
  </div>
  </div>
    </>
  )
}
export default About;