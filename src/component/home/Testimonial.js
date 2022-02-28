import React from 'react';
import a from '../../svg/pic-1.png';
import b from '../../svg/pic-2.png';
import c from '../../svg/pic-3.png';
import d from '../../svg/pic-4.png';
import '../home/banner.css';
import {FaStar} from 'react-icons/fa';
import Slider from "react-slick";
const Testimonial=()=>{
  const settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const reviewData=[
    {
      image:a,
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro doloremque. Ipsam suscipit incidunt pariatur soluta rerum sapiente odit ut.",
      name:"Alex smith",
    },
    {
      image:a,
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro doloremque. Ipsam suscipit incidunt pariatur soluta rerum sapiente odit ut.",
      name:"Alex smith",
    },
    {
      image:a,
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro doloremque. Ipsam suscipit incidunt pariatur soluta rerum sapiente odit ut.",
      name:"Alex smith",
    },
    {
      image:a,
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro doloremque. Ipsam suscipit incidunt pariatur soluta rerum sapiente odit ut.",
      name:"Alex smith",
    },
    {
      image:a,
      para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro doloremque. Ipsam suscipit incidunt pariatur soluta rerum sapiente odit ut.",
      name:"Alex smith",
    },
  

  ]
  return(
    <>
    <div className="container py-24 px-32">
    <h1 className='text-6xl text-center font-bold'>Our Customer Say </h1>
    <div className="lg:w-3/4 w-full mx-auto mt-10 ">
    <Slider {...settings}>
      {
        reviewData.map((e,i)=>{
          return(
            <>
       <div className="bg-white shadow-inner  py-20 px-10 border test">
       <div className="flex lg:flex-nowrap flex-wrap space-x-10">
         <img src={a} alt="" className='w-40 h-40 lg:m-0 mx-auto rounded-full' />
         <div className="mt-2">
         <p className='text-3xl'> 
         {e.para}
         </p>
         <div className="flex space-x-1 mt-3">
                <FaStar className='lg:text-2xl  text-xl text-orange-500'/>
                <FaStar className='lg:text-2xl  text-xl text-orange-500'/>
                <FaStar className='lg:text-2xl  text-xl text-orange-500'/>
                <FaStar className='lg:text-2xl  text-xl text-orange-500'/>
                <FaStar className='lg:text-2xl  text-xl text-orange-500'/>
             
                </div>
         <h1 className='text-5xl font-semibold mt-5'> {e.name} </h1>
         </div>
       </div>
       
     </div>
            </>
          )
        })
      }
     
    
     </Slider>
    </div>
    </div>
    </>
  )
}
export default Testimonial;