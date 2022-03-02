import React, {createContext} from "react";
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
import cartCounter from './component/navigation/countContext'
import Dashboard from "./admin/dashboard/Dashboard";
import Checkout from "./pages/cart/checkout";

import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Layout";
AOS.init();

function App() {


function cartCounterReducer(state, action){
    switch(action.type){
        case 'increment' :
            return {count: state.count + 1}
        case 'decrement' : 
             return {count: state.count - 1}
        default : return state;
    }
}
const [state, dispatch] = React.useReducer(cartCounterReducer, {count: 0})
// import stickerCart from "./pages/cart/stickerCart";
  return (
   <cartCounter.Provider value = {{state, dispatch}}>
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
      <Route exact path="/check" element={ <Checkout/> }/>
     
    
      <Route exact path="/dashboard" element={ <Dashboard/> }/>
  
    </Routes>

    </BrowserRouter>
    <Footer/>
    
   

    
  
    </>
    </cartCounter.Provider>
  );
}
export default App;
