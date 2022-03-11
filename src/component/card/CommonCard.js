import React, { useState, useEffect } from "react";
// import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../card/card.css";

import CardData from "../card/CardData";
const CommonCard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    getUsers(CardData);
  }, []);
  const getUsers = (CardData) => {
    setUsers(CardData);
  };
  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };

  //  const byPrice = (user,price)=>{
  //    if(price){
  //      return user.price === price;
  //    } else return user;
  //  }

  const bySearch = (user, search) => {
    if (search) {
      return user.head.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };
  const filteredList = (users, category, search) => {
    return users
      .filter((user) => byCategory(user, category))
      // .filter((user)=> byPrice(user,price))
      .filter((user) => bySearch(user, search));
  };
 

  return (
    <>
      <div className="container my-12 mx-auto px-4 lg:px-36">
        <div className=" flex w-2/4  mx-auto items-center justify-center space-x-4">
          <div className="">
            <input
              type="search"
              name=""
              id=""
              placeholder="search.."
              className="px-4 py-3 text-2xl border-2 border-black outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        <div className="flex items-center">
        <FaAlignLeft className="cursor-pointer text-3xl" />{" "}
          <h1 className="text-3xl "> Sort By</h1>
          <select
            name="product"
            id=""
            className="ml-2 text-xl w-60 py-3 border-2 cursor-pointer outline-none rounded-lg border-purple-500"
            onChange={e => setCategory(e.target.value)}
          >
            <option value=""> Choose Category </option>
            <option value="selling"> BestSelling </option>
            <option value="low">  Price low to high </option>
            <option value="medium"> Medium price </option>
            <option value="high"> Price high </option>
            <option value="Best Selling"> Date new to old </option>
          </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 mt-10">
        {filteredList(users, category, search).map(user => (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
  

            <article className="overflow-hidden rounded-lg shadow-lg" key={user.id}>
              <Link to="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={user.image}
                />
              </Link>

              <header className=" text-center leading-tight p-2 md:p-4">
                <h1 className="text-xl font-bold"> {user.head} </h1>
                <p className="text-red-700 text-lg font-bold">
             
                {user.pricename}
                  <del className="text-gray-300 text-lg"> {user.pricename} </del>{" "}
                </p>
              </header>
            </article>
            </div>
  
      ))}
            {/* <!-- Article --> */}
          
      
        </div>
      </div>
    </>
  );
};
export default CommonCard;
