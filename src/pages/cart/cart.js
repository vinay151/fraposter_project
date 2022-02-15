import React,{useState} from 'react';
import { FaEnvelope, FaFacebook, FaFolder, FaHome,  FaPinterestP, FaShare, FaShoppingCart, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import onecart from '../../svg/stick.PNG';
const Cart = (props)=>{
    const [click, setClick]= useState(1);
    return(
        <>
        <div className="container px-24 py-20">
          <div className="flex flex-wrap justify-between">
          <div className="lg:w-1/2 w-full  mt-5">
              <img src={onecart} alt="" className='w-full shadow-xl'/>
          </div>
          <div className=" lg:w-2/5 w-full mt-10 lg:mt-0 ">
             
             <p className='flex space-x-3'> <FaHome/> <small> Fraposter </small> <FaFolder/> <small> Formula1 Sticker </small> </p>
            
             
             <div className="mt-5">
                 <h1 className='text-4xl font-extrabold'>Box Box Sticker</h1>
                 <p className="text-red-700 text-lg font-bold mt-7"> Rs. 35.00 <del className="text-gray-300 text-lg"> Rs. 35.00 </del> </p>
                 <p className='mt-3'>Quantity</p>

             </div>
             <div className="flex items-center bg-gray-300 shadow-md rounded-md mt-3">
                 <button className='px-3 py-1 text-xl '  onClick={()=> setClick(click-1)}> - </button>
                 <input type="text" className='px-2 w-full py-1 border-2 rounded-md border-purple-500 outline-none' value={click} />
                 <button className='px-3 py-1 text-xl ' onClick={()=> setClick(click+1)}> + </button>
             </div>
             <div className="mt-8">
                 <button className='w-full flex items-center justify-center py-3 bg-orange-500 rounded-lg text-white text-lg' > <FaShoppingCart/> Add to cart </button>
                 <ul className='list-disc ml-4 mt-6'>
                     <li className='mt-2'> <p className='text-lg'> Decorate your Laptops, Motorcycle, Helmet, Car, Notebook and Mobile Phone.  </p> </li>
                     <li className='mt-2'> <p className='text-lg'> Decorate your Laptops, Motorcycle, Helmet, Car, Notebook and Mobile Phone.  </p> </li>
                     <li className='mt-2'> <p className='text-lg'> Decorate your Laptops, Motorcycle, Helmet, Car, Notebook and Mobile Phone.  </p> </li>
                     <li className='mt-2'> <p className='text-lg'> Decorate your Laptops, Motorcycle, Helmet, Car, Notebook and Mobile Phone.  </p> </li>
                     <li className='mt-2'> <p className='text-lg'> Decorate your Laptops, Motorcycle, Helmet, Car, Notebook and Mobile Phone.  </p> </li>
                 </ul>
             </div>
             <div className="mt-8">
                 <p>FREE DELIVERY ABOVE ₹140/- CART VALUE</p>
                 <div className="flex items-center space-x-6 mt-5">
                    <p className='flex items-center space-x-2'> <FaShare/> Share </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer hover:bg-blue-900 p-2 hover:text-white'> <FaFacebook className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-cyan-500 hover:text-white'> <FaTwitter  className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-red-900 hover:text-white'> <FaPinterestP  className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-green-600 hover:text-white'> <FaWhatsapp  className='text-xl '/> </p>
                    <p className='bg-gray-300 rounded-xl cursor-pointer p-2 hover:bg-orange-500 hover:text-white'> <FaEnvelope  className='text-xl '/> </p>
                 </div>
             </div>
          </div>
          </div>
        </div>
        </>
    )
}
export default Cart;