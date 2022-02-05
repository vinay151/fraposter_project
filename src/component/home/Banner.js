import React from 'react';
import Contact from '../../pages/contact';
// import Slider from "react-slick";
// import { baseUrl } from "./config";
// import one from '../../svg/carousel.jpg'
import './banner.css';
const Banner =()=>{
    // const settings = {
    //     dots: true,
    //     fade: true,
    //     autoPlay:true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    return(
        <>
    
    <div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative pt-16 bg-[#555354] z-10 opacity-100"
  data-bs-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div class="carousel-inner relative w-full overflow-hidden">
    {/* <!-- Single item --> */}
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        class="block w-full opacity-40"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:block absolute text-center bottom-40">
        <h5 class="text-xl mb-10 text-white"> Poster and Design from the Pinccale of Formula1 </h5>
        <button className='px-10 py-3  text-white text-2xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400'> View All </button>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        class="block w-full opacity-40"
        alt="Mountaintop"
      />
       <div class="carousel-caption hidden md:block absolute text-center bottom-40">
        <h5 class="text-xl mb-10 text-white"> Character Poster </h5>
        <button className='px-10 py-3  text-white text-2xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400'> View All </button>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
        class="block w-full opacity-40"
        alt="Woman Reading a Book"
      />
       <div class="carousel-caption hidden md:block absolute text-center bottom-40">
        <h5 class="text-xl mb-10 text-white"> Check Out our Favourite Anime Collection  </h5>
        <button className='px-10 py-3  text-white text-2xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400'> Shop Now </button>
      </div>
    </div>
  </div>
  
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           
{/* <Contact/> */}
        </>
    )
}
export default Banner;