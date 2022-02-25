import React,{useState,Fragment} from 'react';
import ModalCart from './ModalCart';
import '../navigation/nav.css';
import {Link,useNavigate} from 'react-router-dom';
import { FaAngleDown} from 'react-icons/fa'

import cartCounter from '../navigation/countContext';

const Nav =()=>{

  const context = React.useContext(cartCounter)
  // const [changeColor, setChangeColor]=useState(false);
  // const changeNavbar=()=>{
  //   if(window.scrollY >= 80){
  //     setChangeColor(true);
  //   }
  //   else{
  //     setChangeColor(false);
  //   }
  // };
  // window.addEventListener('scroll', changeNavbar);

  const navigate=useNavigate();
  function checkoutClick(event){
    event.preventDefault();
    navigate("/check")
  }
  const user=useNavigate();
  function loginClick(event){
    event.preventDefault();
    user("/dashboard")
  }
  const [hover, setHover]=useState(false);
  const hoverClick=()=>{
      setHover(hover === false ? true : false);
  }
 
  const [open, setOpen]=useState(false);
  const menuOpen=()=>{
      setOpen(open === false ? true : false);
  }

  const [searchForm, setSearchForm]=useState(false);
  const searchMenu=()=>{
      setSearchForm(searchForm === false ? true : false);
  }

  const [openModal, setOpenModal]=useState(false);
  // const cartMenu=()=>{
  //     setCartOpen(cartOpen === false ? true : false);
  // }

  const [loginOpen, setLoginOpen]=useState(false);
  const loginMenu=()=>{
      setLoginOpen(loginOpen === false ? true : false);
  }
  // const [isOpen, setIsOpen] = useState(false)
  // const [isUp, setIsUp] = useState(true)
  return(
    <>
      <header className="header">
      <Link to="#" className="logo">
      <i class="fa fa-print" aria-hidden="true"></i>Fraposter
      </Link>
      <nav className={`navbar ${open ? "is-expanded" : ""}`}>
          <Link to="/">home</Link>
          <Link to="/about">About</Link>
          <Link to="/poster" onMouseEnter={hoverClick} >Poster +
          <ul className={`dropmenu ${hover ? "hover-active" : ""}`}>
            <li  className='mt-3'> <Link to="#"> Anime </Link></li>
            <li  className='mt-3'> <Link to="#"> Anime </Link></li>
            <li  className='mt-3'> <Link to="#"> Anime </Link></li>
            <li  className='mt-3'> <Link to="#"> Anime </Link></li>
            <li  className='mt-3'> <Link to="#"> Anime </Link></li>
            </ul> 
          </Link>
     
        
          <Link to="sticker">Sticker</Link>
          <Link to="/review">Review</Link>
          <Link to="/track">Track your order</Link>
          <Link to="/contact">Contact</Link>
      </nav>
    
      <div className="icons">
          <div className="fas fa-close" id="close-btn"></div>
          <div className="fas fa-bars" id="menu-btn" onClick={menuOpen}></div>
          <div className="fas fa-search" id="search-btn" onClick={searchMenu}></div>
          <div className="fas fa-shopping-cart " id="cart-btn" onClick={()=> {setOpenModal(true)}}>
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
          {/* <div className="box">
              <i className="fas fa-trash"></i>
              <img src="./images/cart-img-1.png" alt=""/>
              <div className="content">
            <h3>Watermelon</h3>
            <span className="price"> $4.99/-</span>
            <span className="quantity"> qty : 1</span>
        
              </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="./images/cart-img-2.png" alt=""/>
            <div className="content">
          <h3>Onion</h3>
          <span className="price"> $4.99/-</span>
          <span className="quantity"> qty : 1</span>
         
            </div>
        </div>
        <div className="box">
            <i className="fas fa-trash"></i>
            <img src="./images/cart-img-1.png" alt=""/>
            <div className="content">
          <h3>Watermelon</h3>
          <span className="price"> $4.99/-</span>
          <span className="quantity"> qty : 1</span>
         
            </div>
        </div>
        <div className="total"> total: $19.69/- </div>
        <Link to="#" className="btn" onClick={checkoutClick}> checkout </Link> */}
      </div>
      
      <form action="" className={`login ${loginOpen ? "active-login" : ""}`}>
      <div className="flex items-center justify-between">
      <h3>login now</h3>
      <p className='text-2xl bg-black text-white px-3 cursor-pointer py-1'> X </p>
      
      </div>
          <input type="email" placeholder="your email" className="box"/>
          <input type="password" placeholder="your password" className="box"/>
          <p className='para'>forget your password <Link to="#"> Click here </Link> </p>
          <p className='para'>don't have account <Link to="/register"> create account </Link> </p>
        

          <input type="submit" value="login now" className="btn" onClick={loginClick}/>
      </form>
  </header>
 {/* < div>
      <nav className="shadow-md bg-white ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link className="cursor-pointer" to='/'>
                <h1 className='text-xl'> FRAPOSTER </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-3">
                <Link
                  to="/"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className=
                    " hover:font-medium hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-3 rounded-md py-2 text-sm"

                >
                  Home
                </Link>

                <Link
                  to="/about"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  About Us
                </Link>
            
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button>
                      <Link
                        to="/poster"
               
                        activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                        className={
                          "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                        }
                      >
                        Poster
                        <FaAngleDown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg z-20 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <Menu.Item>
                          <Link
                            to="/anime"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                           Anime
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/formula1"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                           Formula1
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/formula1"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Formula1
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/charposter"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                            Character Poster
                          </Link>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
           

                <Link
                  to="/sticker"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  Stickers
                </Link>

                <Link
                  to="/review"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  Review
                </Link>
                <Link
                  to="/track"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                >
                  Track Your Order
                </Link>
                <Link
                  to="/contact"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className={
                    "hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                  }
                >
                  Contact Us
                </Link>
                <Link
                  to="#"
                  
                  className={
                    " flex space-x-4  px-3 py-2"
                  }
                >
                <FaUserCircle className='text-2xl cursor-pointer' onClick={userClick}/>
                <Link to="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
  <FaSearch className="text-2xl " />
      </Link>
                <div className="modal fade fixed -top-6 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
  <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4  border-gray-200 rounded-t-md">
        <h5 className="text-2xl font-medium leading-normal text-gray-800 ml-2 " id="exampleModalXlLabel">
          Search
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body relative p-4 flex">
      <input type="text" placeholder='Search our Store' className='w-11/12 text-white text-center text-2xl rounded-md py-4 bg-black  border-2 border-gray-700' />
      <button className='px-10 py-4 bg-gray-500 text-white rounded-r-md'> <FaSearch className='text-2xl text-white'/> </button>
      </div>
    </div>
  </div>
</div>
                <Link to="#"> <FaShoppingCart className='text-2xl cursor-pointer' onClick={()=> {setOpenModal(true)}}/> </Link>
                
                <span className='text-red-500 relative -top-3 -left-6'> {context.state.count}</span>
               
                </Link> 
                <br/>
                { openModal &&  <ModalCart closeModal={setOpenModal}/>}
              </div>
              
            </div>
          

 
            <div className="mr-20 flex md:hidden  z-20">
            <div
                  className={
                    " flex space-x-1  px-3 py-2 "
                  }
                >
                <FaUserCircle className='text-2xl' onClick={userClick}/>
                <FaSearch className='text-2xl'/>
                 

                <FaShoppingCart className='text-2xl'/>
                <span className='text-red-500 relative -top-3 -left-6'> 0 </span>
                </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-black inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div
              className="md:hidden absolute shadow rounded bg-white w-full z-20"
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Home
                </Link>

                <Link
                  to="/whoweare"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  About Us
                </Link>

              

                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                  onClick={() => {
                    isUp === true ? setIsUp(!isUp) : setIsUp(false)
                  }}
                >
                  <div>
                    <Menu.Button className={"w-full"}>
                      <Link
                        to="/poster"
               
                        activeClassName="flex bg-gradient-to-r flex justify-between w-full from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                        className={
                          "flex justify-between w-full hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                        }
                      >
                        Poster
                        <FaAngleDown
                          className="-mr-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-78 rounded-md shadow-lg z-20 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <Menu.Item>
                          <Link
                            to="/anime"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-3 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-3 rounded-md text-sm"
                            }
                          >
                          Anime
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/formula1"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                          Formula1
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/poster"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                          Poster
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/charposter"
                            activeClassName="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                            className={
                              "flex hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium px-3 py-2 rounded-md text-sm"
                            }
                          >
                           Charactrer Poster
                          </Link>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Link
                  to="/sticker"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Stickers
                </Link>
                <Link
                  to="/review"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Review
                </Link>
                <Link
                  to="/track"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Track your order
                </Link>
                <Link
                  to="/contact"
                  activeClassName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-3 py-2 rounded-md text-sm"
                  className="hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-black  hover:font-medium  block px-3 py-2 rounded-md text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div> */}
    </>
  )
}
export default Nav;