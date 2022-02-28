import React from "react";
import one from "../../svg/one-image.webp";
// import tick from '../warranty.png';
import '../card/card.css';
import { Link } from "react-router-dom";

const PosterCard = () => {
 


  const posterData = [
    {
      pimage: one,
      head: "Anime",
      btn: "Shop Now",
      link:"/anime"
    },
    {
      pimage: one,
      head: "Formula1",
      btn: "Shop Now",
      link:"/formula1"
    },
    {
      pimage: one,
      head: "Sport",
      btn: "Shop Now",
      link:"/sport"
    },
    {
      pimage: one,
      head: "Character",
      btn: "Shop Now",
      link:"/charposter"
    },
    {
      pimage: one,
      head: "Motorsport",
      btn: "Shop Now",
      link:"/motor"
    },
    {
      pimage: one,
      head: "Motivational",
      btn: "Shop Now",
      link:"/motivational"
    },
  ];
  return (
    <>
      <div className="container my-20 mx-auto lg:px-36 px-20 ">
        <h1 className="text-center text-6xl py-5 font-semibold">
          Frame Collection
        </h1>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {posterData.map((e, i) => {
            return (
              <>
                <div
              data-aos="zoom-in-down"
                  
                  className=" container w-full md:w-1/2 lg:my-4 my-2 lg:px-4 lg:w-1/3  "
                  key={i}
                >
                  {/* <!-- Article --> */}

                  <div className="" id="poster-img">
                    {/* <img
                      alt="Placeholder"
                      className="block h-auto w-full rounded-lg cursor-pointer transform transition duration-500 hover:scale-110 hover:opacity-60 opacity-95"
                      src={e.pimage}
                    /> */}
                    <header className="text-center relative top-32 z-20">
                      <h1 className="lg:text-4xl text-2xl text-white font-bold mb-8">
                        {e.head}
                      </h1>
                      <Link
                        to={e.link}
                        className="px-6  text-2xl py-5 text-white bg-orange-500 cursor-pointer rounded-lg"
                      >
                        {" "}
                        Shop Now{" "}
                      </Link>
                    </header>
                  </div>

                  {/* <!-- END Article --> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PosterCard;
