import React from "react";
import one from "../../svg/anime1.webp";
import two from "../../svg/formula.jpg";
import thre from "../../svg/sport.jpg";
import four from "../../svg/one-image.webp";
import five from "../../svg/twostick.PNG";
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
      pimage: two,
      head: "Formula1",
      btn: "Shop Now",
      link:"/formula1"
    },
    {
      pimage: thre,
      head: "Sport",
      btn: "Shop Now",
      link:"/sport"
    },
    {
      pimage: four,
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
        <h1 className="text-center text-6xl py-5 font-bold">
          Frame Collection
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-3  gap-6 w-full">
 
  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="object-cover w-full h-96 hover:opacity-60 hover:transition duration-150 ease-in-out hover:scale-125 " src={one} alt="Flower and sky"/>

	<div className="absolute top-20 lg:left-40 px-6 py-4">
	  <h4 className="mb-3 text-3xl font-semibold tracking-tight  text-center text-white"> Anime </h4>
	 <button className="px-10 py-5 bg-orange-500 rounded-lg cursor-pointer text-2xl text-white "> Shop Now </button>
	</div>
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="object-cover hover:opacity-60 hover:transition duration-150 ease-in-out hover:scale-125 w-full h-96" src={two} alt="Flower and sky"/>

	<div className="absolute top-20 lg:left-40 px-6 py-4">
	  <h4 className="mb-3 text-3xl font-semibold tracking-tight  text-center text-white"> Formula1 </h4>
	 <button className="px-10 py-5 bg-orange-500 rounded-lg cursor-pointer text-2xl text-white "> Shop Now </button>
	</div>
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="object-cover hover:opacity-60 hover:transition duration-150 ease-in-out hover:scale-125 w-full h-96" src={thre} alt="Flower and sky"/>

	<div className="absolute top-20 lg:left-40 px-6 py-4">
	  <h4 className="mb-3 text-3xl font-semibold tracking-tight  text-center text-white"> Sport </h4>
	 <button className="px-10 py-5 bg-orange-500 rounded-lg cursor-pointer text-2xl text-white "> Shop Now </button>
	</div>
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="object-cover hover:opacity-60 hover:transition duration-150 ease-in-out hover:scale-125 w-full h-96" src={four} alt="Flower and sky"/>

	<div className="absolute top-20 lg:left-40 px-6 py-4">
	  <h4 className="mb-3 text-3xl font-semibold tracking-tight  text-center text-white"> Character </h4>
	 <button className="px-10 py-5 bg-orange-500 rounded-lg cursor-pointer text-2xl text-white "> Shop Now </button>
	</div>
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="object-cover hover:opacity-60 hover:transition duration-150 ease-in-out hover:scale-125 w-full h-96" src={five} alt="Flower and sky"/>

	<div className="absolute top-20 lg:left-40 px-6 py-4">
	  <h4 className="mb-3 text-3xl font-semibold tracking-tight  text-center text-white"> Motor Sport </h4>
	 <button className="px-10 py-5 bg-orange-500 rounded-lg cursor-pointer text-2xl text-white "> Shop Now </button>
	</div>
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
	<img className="object-cover hover:opacity-60 hover:transition duration-150 ease-in-out hover:scale-125 w-full h-96" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky"/>

	<div className="absolute top-20 lg:left-40 px-6 py-4">
	  <h4 className="mb-3 text-3xl font-semibold tracking-tight  text-center text-white"> Motivational </h4>
	 <button className="px-10 py-5 bg-orange-500 rounded-lg cursor-pointer text-2xl text-white "> Shop Now </button>
	</div>
  </div>
  
</div>
      </div>
    </>
  );
};
export default PosterCard;
