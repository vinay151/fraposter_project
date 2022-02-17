import React from "react";
// import Nav from './component/navigation/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./pages/about";
import Poster from "./pages/poster";
import Home from './component/home/Home';
import Review from "./pages/review";
import Contact from "./pages/contact";
import Nav from "./component/navigation/Nav";
import Login from "./pages/login";
import Register from "./pages/register";
import Footer from './component/footer/Footer';
import Blog from "./pages/blog";


import Stickers from "./pages/stickers";
import Anime from "./pages/anime";
import Formula from "./pages/formula";
import CharPoster from "./pages/charPoster";
import Track from "./pages/track";
import Cart from './pages/cart/cart';
import ReviewForm from "./pages/reviewForm";

import Dashboard from "./admin/dashboard/Dashboard";
// import stickerCart from "./pages/cart/stickerCart";


function App() {
  return (
   
    <>
    <BrowserRouter>
    <Nav/>
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={ <About/> }/>
      <Route exact path="/poster" element={ <Poster/> }/>
      <Route exact path="/review" element={ <Review/> }/>
      <Route exact path="/sticker" element={ <Stickers/> }/>
      <Route exact path="/track" element={ <Track/> }/>
      <Route exact path="/contact" element={ <Contact/> }/>
      <Route exact path="/login" element={ <Login/> }/>
      <Route exact path="/register" element={ <Register/> }/>
      <Route exact path="/blog" element={ <Blog/> }/>
      <Route exact path="/anime" element={ <Anime/> }/>
      <Route exact path="/form" element={ <ReviewForm/> }/>
      <Route exact path="/formula1" element={ <Formula/> }/>
      <Route exact path="/charposter" element={ <CharPoster/> }/>
      <Route exact path="/cart" element={ <Cart/> }/>
     
    
      <Route exact path="/dashboard" element={ <Dashboard/> }/>
  
    </Routes>
    </BrowserRouter>
    <Footer/>
    
   

    
  
    </>
  );
}

export default App;
