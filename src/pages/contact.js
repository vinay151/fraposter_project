import React from "react";
import Breadcrumb from "../component/breadcrumb/Breadcrumb";

// import tick from '../warranty.png';
const Contact = () => {
  return (
    <>
      <Breadcrumb heading="Contact" />
      <div className="container py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <p className="text-xl mt-5">You can contact us on our email id: support@frameo.store</p>
        <p className="text-xl mt-3">Our helpline/ Whatsapp number: 9022574928</p>
        </div>

        <form className="w-full max-w-2xl mx-auto mt-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
             
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
              />
              
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                cols="8"
                rows="8"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="Message"
              />
              
            </div>
          </div>
          <div className="flex">
            <button className="px-7 py-3 bg-orange-500 cursor-pointer rounded-md hover:bg-transparent hover:text-black border-2 border-orange-500 text-white">
              {" "}
              SEND{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
