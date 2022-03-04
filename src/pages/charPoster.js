import React from 'react';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import CommonCard from '../component/card/CommonCard';
import Hero from '../component/Hero/Hero';
const CharPoster=()=>{
    return(
        <>
          <Breadcrumb heading="CharacterPoster" />
        <Hero head="Character Poster" para="Character Poster art and the inspiration. Get premium posters and framed wall art of your favorite anime characters. All the famous anime posters in one section here."/>
       
       <CommonCard/>
        </>
    )
}
export default CharPoster;



