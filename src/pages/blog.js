import React from 'react';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import b from '../svg/fra.jpg';
import c from '../svg/blog1.jpg';
import d from '../svg/blog3.jpg';
// import b from '../svg/fra.jpg';
import { FaEnvelope, FaFacebook,    FaPinterestP, FaShare,  FaTwitter, FaWhatsapp,FaArrowRight,FaArrowLeft } from 'react-icons/fa';
// import tick from '../warranty.png';
const Blog =()=>{
    return(
        <>
    <Breadcrumb heading="Blog"/>
    <div className="container-fluid px-28 py-20">
    <div className="lg:w-10/12 w-full lg:mx-auto mx-4">
        <div className="text-center">
            <h1 className='text-5xl font-bold'>Guide For Custom Fraposter</h1>
        </div>
        <div className="mt-10">
            <img src={b} alt="" className='w-full' />
        </div>
        <div className="flex items-center space-x-6 mt-5">
                    <p className='flex items-center space-x-2'> <FaShare/> Share </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer hover:bg-blue-900 p-2 hover:text-white'> <FaFacebook className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-cyan-500 hover:text-white'> <FaTwitter  className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-red-900 hover:text-white'> <FaPinterestP  className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-green-600 hover:text-white'> <FaWhatsapp  className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-orange-500 hover:text-white'> <FaEnvelope  className='text-xl '/> </p>
                 </div>
                 <div className="mt-5 text-lg">
                     <p>You need something outlining, yet don't have the idea where to begin? We have you. This guide will clarify the process just as assist you with picking, hanging and care for your framed posters.</p>
                     <h1 className='text-3xl font-bold mt-5'>STEP 1: Deciding your Image and Determining Image Quality</h1>
                     <p className='mt-5'>Everyone has different ideas and motivations and so does you. Whatever it is you just need to send us the proper image file.</p>
                     <p>Everyone has different ideas and motivations and so does you. Whatever it is you just need to send us the proper image file.</p>
                     <p>Everyone has different ideas and motivations and so does you. Whatever it is you just need to send us the proper image file.</p>

                 </div>
                 <div className="mt-10">
                     <img src={c} alt="" className='w-full rounded-md'/>
                 </div>
                 <div className="mt-5">
                     <h1 className='text-3xl font-bold'>STEP 2: How to Choose The Right Poster Frame Size</h1>
                     <p className='mt-5 text-lg '>Exploring your way around an Poster frame estimating guide doesn't need to be troublesome at everything except we're made it all that piece simpler with our simple frame size guide. This means your frame will be adjusted and made custom for you according to the image you selected. Posters mounted in larger frames stand out from the crowd and allow your art to shine. You should consider the space you’re thinking of displaying your photo in carefully before deciding on the frame size</p>
                     <p className='mt-5 text-lg'>Posters in standard has a size of 12 inch X 18 inch i.e the A3 size. This is the ideal size and most suitable for your interiors. Although we have a smaller size available which is 8 inch X 12 inch. Also you can get your customized size to fit your purpose.</p>
                 </div>
                 <div className="mt-10">
                     <img src={d} alt="" className='w-full rounded-md'/>
                 </div>
                <hr />
                <div className="">
                    <form>
                        <div className="mt-10">
                            <label htmlFor="name"> Name </label> <br />
                            <input type="text" className='w-full border-2 outline-red-500 py-4 mt-2 px-4 rounded-md' />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="name"> Email </label> <br />
                            <input type="text" className='w-full border-2 outline-red-500 py-4 mt-2 px-4 rounded-md' />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="name"> Message </label> <br />
                           <textarea name="" id="" className='w-full border-2 outline-red-500 rounded-md px-4' cols="5" rows="10"></textarea>
                        </div>
                        <p className='text-lg'>Please note, comments must be approved before they are published</p>
                        <div className="mt-5">
                            <button className='px-12 py-4 bg-orange-600 cursor-pointer rounded-md text-white text-lg flex items-center justify-center'> Post Comment <FaArrowRight className='ml-2 text-sm'/> </button>
                        </div>
                        <div className="mt-10">
                            <button className='justify-center w-full bg-gray-300 py-4 text-lg font-bold flex items-center '> <FaArrowLeft className='mr-2 text-sm'/> Back  </button>
                        </div>
                    </form>
                </div>
    </div>
   
    </div>
        </>
    )
}
export default Blog;