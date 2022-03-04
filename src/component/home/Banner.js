import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import '../home/banner.css';
// import { baseUrl } from "./config";
import one from '../../svg/one-image.webp';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",position:"absolute",right:"130px",padding:"10px", borderRadius:"50%", height:"40px" ,width:"40px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", position:"absolute",left:"130px",padding:"10px", borderRadius:"50%", height:"40px" ,width:"40px" ,zIndex:"100" }}
      onClick={onClick}
    />
  );
}
const Banner =()=>{

  const navigate = useNavigate();
  function formulaClick(event){
    event.preventDefault();
    navigate("/formula1")
  }
  const character = useNavigate();
  function charClick(event){
    event.preventDefault();
    character("/charposter")
  }
  const anime = useNavigate();
  function animeClick(event){
    event.preventDefault();
    anime("/anime")
  }
  const settings = {
    dots: true,
      fade: true,
    autoplay:true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
    return(
        <>
    
      
    {/* <div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative  bg-[#555354] z-10 opacity-100"
  data-bs-ride="carousel"
>
 
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
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


  <div className="carousel-inner relative w-full overflow-hidden">

    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        className="block w-full opacity-40"
        alt="Motorbike Smoke"
      />
      <div data-aos="fade-down" className="carousel-caption hidden md:block absolute text-center lg:bottom-60 sm:bottom-0 md:bottom-0">
        <h5 className="text-4xl mb-10 text-white"> Poster and Design from the Pinccale of Formula1 </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={formulaClick}> View All </button>
      </div>
    </div>

    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        className="block w-full opacity-40"
        alt="Mountaintop"
      />
       <div data-aos="fade-down" className="carousel-caption hidden md:block absolute text-center lg:bottom-60 sm:bottom-0 md:bottom-0">
        <h5 className="text-4xl mb-10 text-white"> Character Poster </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={charClick} > View All </button>
      </div>
    </div>

  
    <div className="carousel-item relative float-left w-full">
      <img
        src={one}
        className="block w-full opacity-40 bg-no-repeat object-center"
        alt="Woman Reading a Book"
      />
       <div data-aos="fade-down" className="carousel-caption hidden md:block absolute text-center lg:bottom-60 sm:bottom-0 md:bottom-0">
        <h5 className="text-4xl mb-10 text-white"> Check Out our Favourite Anime Collection  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={animeClick}> Shop Now </button>
      </div>
    </div>
  </div>
  
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<Slider {...settings} className="w-full">
          <div className="one">
          <div data-aos="fade-down" className="flex w-1/2 justify-center items-center mt-96 text-center  mx-auto ">
        <div>
        <h5 className="text-4xl mb-10 text-white">  Poster and Design  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={animeClick}> View All </button>
        </div>
      </div>
          </div>
          <div className='two'>
          <div data-aos="fade-down" className="flex w-1/2 justify-center items-center mt-96 text-center  mx-auto ">
        <div>
        <h5 className="text-4xl mb-10 text-white"> Character Poster  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={animeClick}> View All </button>
        </div>
      </div>
          </div>
          <div className='three'>
          <div data-aos="fade-down" className="flex w-1/2 justify-center items-center mt-96 text-center  mx-auto ">
        <div>
        <h5 className="text-4xl mb-10 text-white"> Check Out our Favourite Anime Collection  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={animeClick}> Shop Now </button>
        </div>
      </div>
          </div>
         
        </Slider>
{/* <Contact/> */}
        </>
    )
}
export default Banner;