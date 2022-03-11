import React, { useState } from "react";

import "./banner.css";
import StickerData from "./StickerData";
const MainSticker = () => {
//   const [name,setName]= useState("");
//   const [email,setEmail]= useState("");
//   const [password,setPassword]= useState("");
//   const [number,setNumber]= useState("");
//  const [userErr, setUserErr] = useState(false);
//  const [emailErr, setEmailErr] = useState(false);
//  const [passErr, setPassErr] = useState(false);
//  const [numberErr, setNumberErr] = useState(false);
//   function loginHandle(e) {
    
//     e.preventDefault();
 
//   }
//   function userHandle(e){
//     let item = e.target.value;
//     if(item.length<5){
//       setUserErr(true);
//     }
//     else{
//       setUserErr(false);
//     }
//    console.log(e.target.value.length);
//   }
//   function emailHandle(e){
//     let item = e.target.value;
//     if(item.length<3){
//       setEmailErr(true);
//     }
//     else{
//       setEmailErr(false);
//     }
//    console.log(e.target.value.length);

//   }
//   function passHandle(e){
//     let item = e.target.value;
//     if(item.length<8){
//       setPassErr(true);
//     }
//     else{
//       setPassErr(false);
//     }
//     console.log(e.target.value.length);
//   }
//   function numHandle(e){
//     let item = e.target.value;
//     if(item.length<10){
//       setNumberErr(true);
//     }
//     else{
//       setNumberErr(false);
//     }
//     console.log(e.target.value.length);
//   }
  return (
    <>
      <StickerData
        head="Introduction Stickers"
        para="Shopping Your Favourite BMW, Motorsports and Anime Stickers"
      />

      {/* <div className="w-1/2 mx-auto p-10 ">
        <form onSubmit={loginHandle}>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            id=""
            className="w-full px-4 text-2xl border-2 border-black py-4"
            onChange={userHandle}
          />{" "}
          {userErr? <span className="text-xl text-red-500"> user not valid </span> :"" }
          <br /> <br />
          <input
            type="text"
            placeholder="enter your email"
            name="email"
            id=""
            className="w-full px-4 text-2xl border-2 border-black py-4"
            onChange={emailHandle}
          />{" "}
               {emailErr? <span className="text-xl text-red-500"> email not valid </span> :"" }
          <br /> <br />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            id=""
            className="w-full px-4 text-2xl border-2 border-black py-4"
            onChange={passHandle}
          /> {" "}
          {passErr? <span className="text-xl text-red-500"> password  not valid </span> :"" }
          <br /> <br />
          <input
            type="number"
            placeholder="enter your phone"
            name="number"
            id=""
            className="w-full px-4 text-2xl border-2 border-black py-4"
            onChange={numHandle}
          />{" "}
          {numberErr? <span className="text-xl text-red-500"> phone not valid </span> :"" }
          <br /> <br />
          <button
            type="submit"
            className="px-12 py-5 bg-blue-400 text-2xl text-white "
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div> */}
    </>
  );
};

export default MainSticker;
