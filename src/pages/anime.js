import React from 'react';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import Hero from '../component/Hero/Hero';
import CommonCard from '../component/card/CommonCard';
// import './anime.css';
const Anime=()=>{
    return(
        <>
        <Hero head="Anime Collection" para="Anime art and the inspiration. Get premium posters and framed wall art of your favorite anime characters. All the famous anime posters in one section here."/>
        <Breadcrumb heading="Anime Collection"/>
        <CommonCard/>
        </>
    )
}
export default Anime;