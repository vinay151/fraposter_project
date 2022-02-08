import React from 'react';
import PosterCard from '../card/PosterCard';
import Banner from './Banner';
import BlogHome from './BlogHome';
import Service from './Service';
import MainSticker from './MainSticker';
import Testimonial from './Testimonial';
// import Footer from './Footer';
const Home =()=>{
    return(
        <>
        <Banner/>
        <PosterCard/>
        <MainSticker/>
        <BlogHome/>
        <Testimonial/>
        <Service/>
        </>
    )
}
export default Home;