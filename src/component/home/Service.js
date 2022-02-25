import React from 'react';
import p from '../../svg/p.PNG';
import f from '../../svg/free.PNG';
import one from '../../svg/s3.PNG';

const serviceData=[
    {
        simg:p,
        head:"Premium Quality",
        para:"Our posters are printed with best in class printers and have unique glossy finish.",
    },
    {
        simg:f,
        head:"Free Shopping",
        para:"Get free shipping for prepaid orders.",
    },
    {
        simg:one,
        head:"100% Satisfaction",
        para:"To get the best value for your purchase is our top priority",
    }
]
const Service =()=>{
    return(
        <>
         <div className="container py-12 px-32">
             <div className="flex flex-wrap -mx-1 lg:-mx-4">
                 {
                     serviceData.map((e,i)=>{
                         return(
                             <>
                                <div className=" w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                 <article class="overflow-hidden ">
                 <img alt="Placeholder" class="mx-auto" src={e.simg}/>
    

    <header class="text-center mt-4">
        <h1 class="text-3xl font-semibold">
            
    {e.head}
            
        </h1>
       <p className='mt-2 text-2xl'>{e.para}</p>
    </header>
    </article>
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
export default Service;