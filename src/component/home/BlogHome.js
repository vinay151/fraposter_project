import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import one from '../../svg/one-image.webp';
// import tick from '../warranty.png';
const BlogHome =()=>{
    const navigate = useNavigate();
    function blogClick(event){
        event.preventDefault();
        navigate("/blog");
    }
    return(
        <>
          <div className="container-fluid py-10 px-32 bg-zinc-600">
          <div className="lg:flex  space-x-6">
              <div className="lg:w-1/3 bg-slate-300 shadow sm:w-full md:w-full ">
              <img src={one} alt="" className='block w-full p-2 cursor-pointer'/>
              </div>
              <div className="pt-4 lg:w-4/6 sm:w-full md:w-full  text-white">
                  <h6 className='ml-6' >FEATURED BLOG</h6>
                  <h1 className='text-5xl mt-5 ml-6 '>Your Guide to selecting <br /> and <br /> customizing FraPoster</h1>
                  <p className='mt-3  text-xl ml-6'> Many Of us different fraposter ideas. You need something outlining,yet don't 
                      have the idea where ... </p>
                <div className="mt-10 ml-6">
                <Link to="/blog" className='px-6 py-4 rounded-md bg-black ' onClick={blogClick}> Read More  </Link>
                </div>
              </div>
            
                
             
          </div>
          </div>
        </>
    )
}
export default BlogHome;