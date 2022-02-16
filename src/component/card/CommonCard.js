import React from 'react';
// import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import { FaAlignLeft } from 'react-icons/fa';
import '../card/card.css';
const CommonCard=()=>{
    const commonData = [
        {
        
          head: "Anime",
         link:"/cart"
        },
        {
        
            head: "Formula1",
            link:"/cart"
          },
          {
        
            head: "Stickers",
            link:"/cart"
          },
          {
        
            head: "Motivational",
            link:"/cart"
          },
    ]
  
    return(
        <>
     <div className="container my-12 mx-auto px-4 md:px-12">
            <div className=" flex w-2/4  mx-auto items-center justify-center space-x-1">
            <FaAlignLeft className='cursor-pointer'/>  <h1 className="text-lg "> Sort By</h1>
                <select name="" id="" className="ml-2 w-60 py-3 border-2 cursor-pointer outline-none rounded-lg border-purple-500">
                    <option value="Featured"> Fetured </option>
                    <option value="Best Selling"> BestSelling </option>
                    <option value="Best Selling"> Price Low To High </option>
                    <option value="Best Selling"> Price High to Low </option>
                    <option value="Best Selling"> Date old to new </option>
                    <option value="Best Selling"> Date new to old </option>
                </select>
            </div>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {
            commonData.map((e,i)=>{
                return(
                    <>
   <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" key={i}>

{/* <!-- Article --> */}
<article className="overflow-hidden rounded-lg shadow-lg">

    <a href={e.link} >
        <img alt="Placeholder" className="block h-auto w-full postercard" src="https://picsum.photos/600/400/?random"/>
    </a>

    <header className=" text-center leading-tight p-2 md:p-4">
        <h1 className="text-xl font-bold">
           
              {e.head}
            
        </h1>
        <p className="text-red-700 text-lg font-bold"> Rs. 299.00 <del className="text-gray-300 text-lg"> Rs. 299.00 </del> </p>
       
    </header>


</article>
{/* <!-- END Article --> */}

</div>
                    </>
                )
            })
        }

        {/* <!-- Column --> */}
     
        {/* <!-- END Column -->

        <!-- Column --> */}
       

    </div>
</div>
      
        </>
    )
}
export default CommonCard;



