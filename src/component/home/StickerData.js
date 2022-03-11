import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { NavLink } from 'react-router-dom';

import './banner.css';
const StickerData=(props)=>{




  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay:true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };
  const options = {
    loop: true,
   
    dotsdata:"value.toString()",
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  };
 
    return(
    
        <>
        <div className="container py-16 text-center px-36">
         <div className="">
             <h1 className='text-6xl font-bold'> {props.head} </h1>
             <p className='py-4 text-3xl '> {props.para} </p>
         </div>
       
            <div>
        
            <OwlCarousel
              className="slider-items owl-carousel mt-4"
              {...options}
              id="slider_cat"
            >
              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="item" data-dot="<button>02</button>">
                        <img
                          src="https://picsum.photos/600/400/?random"
                          alt="abc"
                          className='h-80'
                        />
                
                        {/* <!-- <div className="all_items">45 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://picsum.photos/600/400/?random"
                          alt="abc"
                          className='h-80'
                        />
               
                        {/* <!-- <div className="all_items">49 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://picsum.photos/600/400/?random"
                          alt="abc"
                          className='h-80'
                        />
              
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://picsum.photos/600/400/?random"
                          alt="abc"
                          className='h-80'
                        />
             
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="item">
                <NavLink className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://picsum.photos/600/400/?random"
                          alt="abc"
                          className='h-80'
                        />
                  
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </OwlCarousel>
       
      </div>
      <div className="py-20">
<button className='px-10 py-5  text-black text-3xl hover:bg-orange-400  rounded-md cursor-pointer border-2 border-orange-400'> View All </button>

</div>

        </div>
        </>
    )
}
export default StickerData;