import React from "react";
import Nav from './component/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./pages/about";
import Poster from "./pages/poster";
import Review from "./pages/review";
import Contact from "./pages/contact";
import Home from "./component/Home";
// import Footer from "./component/Footer";

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
      <Route exact path="/contact" element={ <Contact/> }/>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
