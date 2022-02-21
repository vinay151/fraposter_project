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
          <div className="lg:flex space-x-6">
              <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="lg:w-1/3 w-full  bg-slate-300 shadow ">
              <img src={one} alt="" className='block w-full p-2 cursor-pointer'/>
              </div>
              <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="pt-4 lg:w-4/6 w-full  text-white">
                  <h6 className='lg:ml-6 ml-0' >FEATURED BLOG</h6>
                  <h1 className='lg:text-5xl ml-0 mt-5 lg:ml-6 text-2xl'>Your Guide to selecting <br /> and <br /> customizing FraPoster</h1>
                  <p className='lg:mt-3  lg:text-xl lg:ml-6 mt-4 ml-0 text-lg'> Many Of us different fraposter ideas. You need something outlining,yet don't 
                      have the idea where ... </p>
                <div className="mt-10 lg:ml-6 ml-0">
                <Link to="/blog" className='lg:px-6 hover:px-10 lg:py-4 px-3 py-3 rounded-md bg-black ' onClick={blogClick}> Read More  </Link>
                </div>
              </div>
            
                
             
          </div>
          </div>
        </>
    )
}
export default BlogHome;