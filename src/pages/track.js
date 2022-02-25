import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
const Track=()=>{
    return(
        <>
        <Breadcrumb heading="Track Your Order"/>
      <div className="container-fluid lg:px-48 px-6 py-20 bg-gray-400">
          <div className="bg-white shadow-md rounded-lg  p-12">
          <div className="flex items-center pb-10 space-x-3">
          <FaShippingFast className='text-5xl'/>
              <h6 className='lg:text-3xl text-xl text-gray-600'> Track status of Your shipment </h6>
          </div>
          <hr />
          <div className="w-full">
              <form >
                  <div className="mt-10 lg:text-2xl text-base text-gray-600">
                      <label htmlFor=""> Search By: </label>
                      <input type="radio"  className='' /> Order Id
                      <input type="radio"  className='ml-2'/> AWB
                  </div>
                  <div className="mt-8">
                      <input type="text" name="" id="" placeholder='Enter Order Id/AWB No.' className='lg:w-1/2 w-full py-4 px-2 border-2 text-2xl border-gray-300 outline-none'/>
                     
                  </div>
                  <div className="mt-8">
                  <button className='px-24 py-5 rounded-lg bg-blue-500 text-white text-2xl ' type='submit'> Submit </button>
                  </div>
              </form>
          </div>
          </div>
      </div>
        </>
    )
}
export default Track;