import React from 'react'
import b from '../../svg/box.jpg';
const ModalCart = ({closeModal}) => {
  return (
   <>
   <div className="container absolute top-10 -left-14  z-20 py-10 px-10">
       <div className="lg:w-1/3 w-full bg-black  text-white p-5">
           <div className="flex items-center justify-between mb-4">
               <h1>Your Cart(1) </h1>
               <button onClick={()=> closeModal(false)} className="bg-gray-500 rounded-lg px-4 py-2"> X </button>
           </div>
         <hr />
           <div className="flex items-center mt-5 space-x-4 mb-5">
            <img src={b} alt="" className='w-32 h-32 rounded-md' />
            <h1>Box Box Sticker</h1>
           <div className="flex text-black border"> <button className='p-2 text-white '> - </button> <input type="text" className='outline-none w-full text-center' value="1"/> <button className='p-2 text-white'> + </button> </div>
           </div>
           <hr />
           <div className="flex items-center justify-between mb-5 mt-5">
               <h1>Subtotal</h1>
               <p> Rs. 35.00 </p>
           </div>
           <hr />
           <div className="mt-10">
               <button className='w-full text-center py-4 rounded-lg bg-orange-500 text-white'>Checkout</button>
           </div>
       
       </div>
   </div>
   </>
  )
}

export default ModalCart