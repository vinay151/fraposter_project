import React from 'react';
import {FaStar} from 'react-icons/fa';
// import tick from '../warranty.png';
const Testimonial =()=>{
    return(
        <>
     <div className="container py-16 px-24">
      <div className="">
          <div className="border-2 border-orange-500 w-2/5 flex items-center ">
              <h1 className='bg-orange-500 w-36 text-white font-semibold px-6 py-3 text-2xl text-center'> REVIEW </h1>
          
            <div className="flex items-center">
                <FaStar className='text-xl mx-1'/>
                <FaStar className='text-xl mx-1'/>
                <FaStar className='text-xl mx-1'/>
                <FaStar className='text-xl mx-1'/>
                <FaStar className='text-xl mx-1'/>
                <p className='text-xl ml-2'> from 38 review </p>
                </div> 
              
          </div>
          <div className="">
          <section class="relative mt-10  overflow-hidden">
  <img class="absolute top-0 right-0 -mr-80 -mt-80" src="zospace-assets/lines/circle.svg" alt=""/>
  <img class="hidden lg:block absolute bottom-0 left-0 w-96" src="zospace-assets/lines/half-double-circle.svg" alt=""/>
  <div class="relative container-fluid px-4 mx-auto">
    <div class="max-w-5xl mx-auto">
     
      <div class="relative flex flex-wrap -mx-5 mb-20">
        <div class="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
          <div class="flex -mx-4 lg:mx-0">
            <div class="w-1/3 px-4">
              <img class="w-30 h-40 mx-auto rounded-full object-cover" src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt=""/>
            </div>
            <div class="w-2/3 px-4">
              <div class="relative inline-block mb-8 p-10 bg-gray-500 rounded-lg">
                <div class="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-500" style={{clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}}></div>
                <img class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14" src="zospace-assets/images/quote-circle.svg" alt=""/>
                <p class="mb-8 text-lg text-gray-200">The brown me malesuada nisi quis arcu ultrices, a fermentum libero maximus. Donec est urna, semper. At sem quis, congue dictum ipsum quam, sagittis.</p>
                <div class="flex mb-4">
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img src="zospace-assets/images/star-empty.svg" alt=""/>
                </div>
                <h3 class="mb-1 text-2xl text-white font-bold">L&eacute;a Herrera</h3>
                <p class="text-white">Google</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-5">
          <div class="flex -mx-4 lg:mx-0">
            <div class="w-1/3 px-4">
              <img class="w-30 h-40 mx-auto rounded-full object-cover object-top" src="https://images.pexels.com/photos/5325893/pexels-photo-5325893.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt=""/>
            </div>
            <div class="w-2/3 px-4">
              <div class="relative inline-block mb-8 p-10 bg-gray-500 rounded-lg">
                <div class="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-500" style={{clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}}></div>
                <img class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14" src="zospace-assets/images/quote-circle.svg" alt=""/>
                <p class="mb-8 text-lg text-gray-200">The brown me malesuada nisi quis arcu ultrices, a fermentum libero maximus. Donec est urna, semper. At sem quis, congue dictum ipsum quam, sagittis.</p>
                <div class="flex mb-4">
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img class="mr-1" src="zospace-assets/images/star-full.svg" alt="" />
                  <img src="zospace-assets/images/star-half.svg" alt=""/>
                </div>
                <h3 class="mb-1 text-2xl text-white font-bold">Harry Douglas</h3>
                <p class="text-white">Asos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="inline-flex mr-2 items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
          <svg width="7" height="14" viewbox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.84708 12.115C7.05097 12.3207 7.05097 12.6512 6.84708 12.8554C6.64319 13.0596 6.31377 13.0603 6.10987 12.8554L0.152917 6.87493C-0.0509739 6.67074 -0.0509738 6.34026 0.152917 6.13456L6.10988 0.154119C6.31377 -0.0500693 6.64319 -0.0500693 6.84708 0.154119C7.05097 0.359063 7.05097 0.690301 6.84708 0.894489L1.4143 6.50512L6.84708 12.115Z" fill="white"></path>
          </svg>
        </button>
        <button class="inline-flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full">
          <svg width="7" height="13" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.15292 0.901511C-0.0509709 0.696057 -0.0509709 0.365972 0.15292 0.16203C0.356811 -0.0419136 0.686232 -0.0426689 0.890123 0.16203L6.84708 6.13528C7.05097 6.33923 7.05097 6.66931 6.84708 6.87476L0.890121 12.848C0.686231 13.052 0.35681 13.052 0.152919 12.848C-0.050972 12.6433 -0.0509719 12.3125 0.152919 12.1085L5.5857 6.50465L0.15292 0.901511Z" fill="white"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
          </div>
      </div>
     </div>
        </>
    )
}
export default Testimonial;