import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import {Link} from 'react-router-dom';
const Sticker=()=>{
    const options = {
        loop: true,
        margin: 10,
        dots:true,
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
        <div className="container py-16 text-center">
         <div className="">
             <h1 className='text-4xl font-bold'>Introducing Stickers</h1>
             <p className='py-4 text-xl '> Shopping Your Favourite BMW, Motorsports and Anime Stickers </p>
         </div>
         <div className="px-10">
         <OwlCarousel
              className="slider-items owl-carousel"
              {...options}
              id="slider_cat"
            >
              <div className="item">
                <Link className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/6/8/g/image.related.StuffThumbnailSixteenByNine.1600x900.2128uc.11ys6n.png/1599630686540.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Dad to be reunited with twins</h5>
                        {/* <!-- <div className="all_items">45 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/m/4/c/l/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8nm.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Afternoon trivia challenge</h5>
                        {/* <!-- <div className="all_items">49 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/8/e/w/image.related.StuffThumbnailSixteenByNine.1600x900.211s9q.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Fisheran witness rare sight of white shark</h5>
                        {/* <!-- <div className="all_items">7 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/9/0/p/image.related.StuffThumbnailSixteenByNine.1600x900.2125s7.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>The subrau legacy is no more</h5>
                        {/* <!-- <div className="all_items">19 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="cate_a" to="/fullDetailsPage">
                  <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                          src="https://resources.stuff.co.nz/content/dam/images/4/y/o/5/o/5/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8sz.120x1p.png/1599631255429.jpg?format=pjpg&crop=16:9,smart&width=200"
                          alt="abc"
                        />
                        <h5>Many losers if Austria snares rugby</h5>
                        {/* <!-- <div className="all_items">40 item</div> --> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
<div className="py-20">
<button className='px-10 py-3  text-black text-2xl hover:bg-orange-400  rounded-md cursor-pointer border-2 border-orange-400'> View All </button>

</div>
            </div>

        </div>
        </>
    )
}
export default Sticker