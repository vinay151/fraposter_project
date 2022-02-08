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
import Breadcrumb from "./component/breadcrumb/Breadcrumb";
import Stickers from "./pages/stickers";

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
      <Route exact path="/contact" element={ <Contact/> }/>
      <Route exact path="/login" element={ <Login/> }/>
      <Route exact path="/register" element={ <Register/> }/>
      <Route exact path="/blog" element={ <Blog/> }/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    

    </>
  );
}

export default App;
