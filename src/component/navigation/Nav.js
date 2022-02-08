import React,{useState} from 'react';
// import '../component/navigation/nav.css'
import { Transition } from "@headlessui/react";
import {FaAngleDown,FaUserCircle,FaShoppingCart,FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const Nav =()=>{
  const navigate=useNavigate();
  function userClick(event){
    event.preventDefault();
    navigate("/login")
  }
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="container-fluid  sticky top-0 z-20 w-full">
       
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-evenly h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                {/* <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
                <h2 className='text-white text-xl'>FRAPOSTER</h2>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/poster"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Poster
                  </Link>

                  <Link
                    to="sticker"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Stickers
                  </Link>

                  <Link
                    to="review"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Review
                  </Link>
                  <Link
                    to="track"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Track Your Order
                  </Link>
                  <Link
                    to="contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                 Contact
                  </Link>
                
                <Link
                    to="/login"
                    className=""
                    onClick={userClick}
                  >
                 <FaUserCircle className='text-2xl text-white'/>
                  </Link>
                  <Link to="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
  <FaSearch className="text-2xl text-white" />
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
                  <Link
                    to="#"
                    className="flex"
                  >
                 <FaShoppingCart className='text-2xl text-white'/>
                 <span className='text-red-500 relative -top-3 -left-2'> 0 </span>
                  </Link>
                </div>
              
                
              </div>
            </div>
            <div className="-mr-2 flex md:hidden ">
          
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>

                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Poster
                </Link>

                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Stickers
                </Link>

                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Review
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Track Your Order
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact 
                </Link>
                <hr />
                <div className="ml-3 ">
                 <button className='px-40 mt-2 py-2 bg-black text-white rounded-md'> Log In </button>
                 <button className='px-32 mt-4 py-2 bg-orange-500 text-white rounded-md'> Create Account </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
         
      
        </>
    )
}
export default Nav;