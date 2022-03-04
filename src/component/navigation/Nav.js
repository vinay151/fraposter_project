import React,{useState} from 'react';
import ModalCart from './ModalCart';
import '../navigation/nav.css';
import {Link,useNavigate} from 'react-router-dom';


import cartCounter from '../navigation/countContext';

const Nav =()=>{

  const context = React.useContext(cartCounter)
  

  
 
  const user=useNavigate();
  function loginClick(event){
    event.preventDefault();
    setLoginOpen(false)
    user("/dashboard")
  }
  
  //  navigation menu hooks 
  const [open, setOpen]=useState(false);
  const closeMobileMenu = () => setOpen(false);
  const menuOpen=()=>{
      setOpen(open === false ? true : false); 
      setSearchForm(false);
      setOpenModal(false);
      setLoginOpen(false);
  }
  // search popup hooks 
  const [searchForm, setSearchForm]=useState(false);
  const searchMenu=()=>{
      setSearchForm(searchForm === false ? true : false);
      setOpen(false);
      setLoginOpen(false);
      setOpenModal(false);
  }
//  cart modal popup hooks 
  const [openModal, setOpenModal]=useState(false);
  const cartMenu=()=>{
      setOpenModal(true);
      setOpen(false);
      setSearchForm(false);
     setLoginOpen(false);
  }
  // user login popup hooks 
  const [loginOpen, setLoginOpen]=useState(false);
  const loginMenu=()=>{
      setLoginOpen(loginOpen === false ? true : false);
      setOpen(false);
   
      setSearchForm(false);
      setOpenModal(false);
  }
  // const [isOpen, setIsOpen] = useState(false)
  // const [isUp, setIsUp] = useState(true)
  return(
    <>
      <header className="header">
        {
          open?(
            <div className="fas fa-close" id="close-btn"onClick={menuOpen} ></div>
          ):(

    <div className="fas fa-bars" id="menu-btn" onClick={menuOpen}></div>
          )
        }
   
      
      <Link to="#" className="logo">
      <i class="fa fa-print" aria-hidden="true"></i>Fraposter
      </Link>
      <nav className={`navbar ${open ? "is-expanded" : ""}`}>
          <Link to="/" onClick={closeMobileMenu}>home</Link>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
          <Link to="/poster" className='drop' onClick={closeMobileMenu}>Poster +
          <ul className="dropmenu">
            <li  className='mt-3'> <Link to="#"  onClick={closeMobileMenu}> Anime </Link></li>
            <li  className='mt-3'> <Link to="#"  onClick={closeMobileMenu}> Formula1 </Link></li>
            <li  className='mt-3'> <Link to="#"  onClick={closeMobileMenu}> Sticker </Link></li>
            <li  className='mt-3'> <Link to="#"  onClick={closeMobileMenu}> Motor </Link></li>
            <li  className='mt-3'> <Link to="#"  onClick={closeMobileMenu}> Character </Link></li>
            </ul> 
          </Link>
     
        
          <Link to="sticker" onClick={closeMobileMenu}>Sticker</Link>
          <Link to="/review" onClick={closeMobileMenu}>Review</Link>
          <Link to="/track" onClick={closeMobileMenu}>Track your order</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
      </nav>
    
      <div className="icons">
     
         
          <div className="fas fa-search" id="search-btn" onClick={searchMenu}></div>
          <div className="fas fa-shopping-cart " id="cart-btn" onClick={cartMenu}
>
          <span className="noti"> {context.state.count}</span>
             </div>
          <div className="fas fa-user" id="login-btn" onClick={loginMenu}></div>
      </div>
      <form action="" className={`search-form ${searchForm ? "active-search" : ""}`}>
          <input type="search" id="search-box" placeholder="Search here.."/>
          <label for="search-box" className="fas fa-search"></label>
      </form>
      <div className={`shopping-cart ${openModal ? "active-cart" : ""}`}>
      { openModal &&  <ModalCart closeModal={setOpenModal}/>}
         
      </div>
      
      <form action="" className={`login ${loginOpen ? "active-login" : ""}`}>
      <div className="flex items-center justify-between">
      <h3>login now</h3>
      <p className='text-2xl bg-black rounded-md text-white px-3 cursor-pointer py-1' onClick={()=>  setLoginOpen(false)} > X </p>
      
      </div>
          <input type="email" placeholder="your email" className="box"/>
          <input type="password" placeholder="your password" className="box"/>
          <p className='para'>forget your password <Link to="#"> Click here </Link> </p>
          <p className='para'>don't have account <Link to="/register"> create account </Link> </p>
        

          <input type="submit" value="login now" className="btn" onClick={loginClick}/>
      </form>
     
  </header>

    </>
  )
}
export default Nav;