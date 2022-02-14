import React from 'react';
import one from '../../svg/one-image.webp';
import two from '../../svg/twostick.PNG';
import three from '../../svg/stick.PNG';

// import {Link} from 'react-router-dom';
import Slider from "react-slick";
import './banner.css';
const MainSticker=()=>{
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
    
    
    return(
        <>
        <div className="container py-16 text-center px-12">
         <div className="">
             <h1 className='text-4xl font-bold'>Introducing Stickers</h1>
             <p className='py-4 text-xl '> Shopping Your Favourite BMW, Motorsports and Anime Stickers </p>
         </div>
       
            <div>
        
        
        <Slider {...settings} className="py-4 px-10 w-full  ">
          <div>
          <img src={one} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={two} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={one} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={three} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={one} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={two} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={three} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={one} alt="" className='w-full block'/>
          </div>
          <div>
          <img src={two} alt="" className='w-full block'/>
          </div>
          
        </Slider>
      </div>
      <div className="py-20">
<button className='px-10 py-3  text-black text-2xl hover:bg-orange-400  rounded-md cursor-pointer border-2 border-orange-400'> View All </button>

</div>
        </div>
        </>
    )
}
export default MainSticker;