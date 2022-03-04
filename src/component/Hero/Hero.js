import React from 'react';
// import defaultProps from 'react-slick/lib/default-props';
import '../Hero/hero.css'
const Hero=(props)=>{
    return(
        <>
         
        <div className="container-fluid" id="collection">
            
        </div>
        <div className="text-center absolute  top-72 z-50">
                <h2 className='text-6xl  font-extrabold'> {props.head} </h2>
                <p className=' text-4xl w-1/2 z-50 mx-auto mt-5 '> {props.para} </p>
            </div>
        
        </>
    )
}
export default Hero;