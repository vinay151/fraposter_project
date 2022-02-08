import React from 'react';
import one from'../../svg/one-image.webp'
// import tick from '../warranty.png';
const PosterCard =()=>{
    const posterData=[
        {
            pimage:one,
            head:"Anime",
            btn:"Shop Now"
        },
        {
            pimage:one,
            head:"Anime",
            btn:"Shop Now"
        },
        {
            pimage:one,
            head:"Anime",
            btn:"Shop Now"
        },
        {
            pimage:one,
            head:"Anime",
            btn:"Shop Now"
        },
        {
            pimage:one,
            head:"Anime",
            btn:"Shop Now"
        },
        {
            pimage:one,
            head:"Anime",
            btn:"Shop Now"
        },
    ]
    return(
        <>
      <div className="container my-12 mx-auto px-24 ">
    
          <h1 className='text-center text-3xl py-5 font-semibold'>Frame Collection</h1>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
   {
       posterData.map((e,i)=>{
           return(
               <>
               
                <div className="  w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  " key={i}>

{/* <!-- Article --> */}


        <div className=" relative">
       
        <img alt="Placeholder" className="block h-auto w-full rounded-lg cursor-pointer transform transition duration-500 hover:scale-110 hover:opacity-60 opacity-95" src={e.pimage}/>
        <header className="text-center absolute bottom-32 left-28">
        <h1 className="text-2xl text-red-600 font-bold">
            
            Anime
            
        </h1>
        <button className='px-4 py-3 mt-3 text-white bg-orange-500 cursor-pointer rounded-lg'> Shop Now </button>
    </header>
    </div>
   
   

 


{/* <!-- END Article --> */}

</div>
               </>
           )
       })
   }
      

    </div>
</div>
        </>
    )
}
export default PosterCard;