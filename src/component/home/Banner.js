import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import '../home/banner.css';

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
    
      
   
<Slider {...settings} className="w-full">
          <div className="one">
          <div className="flex w-1/2 justify-center items-center mt-96 text-center  mx-auto ">
        <div>
        <h5 className="text-4xl mb-10 text-white">  Poster and Design  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={animeClick}> View All </button>
        </div>
      </div>
          </div>
          <div className='two'>
          <div className="flex w-1/2 justify-center items-center mt-96 text-center  mx-auto ">
        <div>
        <h5 className="text-4xl mb-10 text-white"> Character Poster  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={charClick}> View All </button>
        </div>
      </div>
          </div>
          <div className='three'>
          <div  className="flex w-1/2 justify-center items-center mt-96 text-center  mx-auto ">
        <div>
        <h5 className="text-4xl mb-10 text-white"> Check Out our Favourite Anime Collection  </h5>
        <button className='px-10 py-3  text-white text-3xl hover:bg-orange-400 hover:text-black rounded-md cursor-pointer border-2 border-orange-400' onClick={formulaClick}> Shop Now </button>
        </div>
      </div>
          </div>
         
        </Slider>
{/* <Contact/> */}
        </>
    )
}
export default Banner;