import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import '../navigation/nav.css';
import b from '../../svg/box.jpg';
import cartCounter  from '../navigation/countContext'
const ModalCart = ({closeModal}) => {
    const check = useNavigate();
    function checkClick(event){
        event.preventDefault();
           check("/check");
    }
const context = useContext(cartCounter);
console.log(context.value)
  return (
 
   <>
   <div className="container modal-cart z-20  ">
       <div className=" w-full bg-black  text-white pt-10 pb-20 px-12">
           <div className="flex items-center text-2xl justify-between mb-4">
               <h1 className=''>Your Cart(1) </h1>
               <button onClick={()=> closeModal(false)} className="bg-gray-500 rounded-lg px-4 py-2"> X </button>
           </div>
         <hr />
           <div className="flex  items-center mt-5 text-2xl space-x-4 mb-5">
            <img src={b} alt="" className='w-32 h-32 rounded-md' />
            <h1>Box Box Sticker</h1>
           <div className="flex text-black border"> <button className='p-2 text-white ' onClick={()=> context.dispatch({type:'decrement'})}> - </button> <input type="text" className='outline-none w-full text-center' value={context.state.count}/> <button className='p-2 text-white' onClick={()=> context.dispatch({type:'increment'})}> + </button> </div>
           </div>
           <hr />
           <div className="flex items-center text-2xl justify-between mb-5 mt-5">
               <h1>Subtotal</h1>
               <p> Rs. 35.00 </p>
          
     </div>
           <hr />
           <div className="mt-10">
               <button className='w-full text-2xl text-center py-4 rounded-lg bg-orange-500 text-white' onClick={checkClick} >Checkout</button>
           </div>
       
       </div>
   </div>
   </>
  )
}

export default ModalCart