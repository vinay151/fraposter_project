import React from 'react';
// import defaultProps from 'react-slick/lib/default-props';
import '../Hero/hero.css'
const Hero=(props)=>{
    return(
        <>
         
        <div className="container-fluid" id="collection">
            <div className="text-center relative top-32 z-20">
                <h2 className='text-4xl  font-bold'> {props.head} </h2>
                <p className='text-white text-2xl '> {props.para} </p>
            </div>
        </div>
        
        </>
    )
}
export default Hero;