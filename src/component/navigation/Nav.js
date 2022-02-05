import React,{Component} from 'react';
import menu from '../../svg/bars-solid.svg';
import close from '../../svg/times-solid.svg';
import cart from '../../svg/shopping-cart-solid.svg';
import user from '../../svg/user-circle-solid.svg';
import search from '../../svg/search-solid.svg';
import {FaAngleDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../navigation/nav.css';

export default class Nav extends Component{

    state ={
        toggle:false
    }
    menuToggle =()=>{
        this.setState({toggle: !this.state.toggle})
    }
    render(){
const {toggle} = this.state
    
    return(
        <>
        <div className='container-fluid fixed w-full z-20'>
        <header className='bg-[#555354]'>
   <div className='menu' onClick={this.menuToggle}>
    <img src={menu} alt="" width="20" />
   </div>
   <div className="logo">
       <h1> <Link to="/"> FRAPOSTER </Link> </h1>
   </div>
   <nav >
       <ul className={toggle ? "toggle" : ""}>
           <li> <Link to="/"> home </Link> </li>
           <li> <Link to="/about"> About us </Link> </li>
          
           <li className='dropdown'> <Link to="/poster"> poster  </Link> <FaAngleDown className='relative -top-5 left-20 cursor-pointer text-white icon-down'/>
          <ul className='dropdown-content'>
              <li className=''> <Link to="#">hello</Link> </li>
              <li className=''> <Link to="#">hello</Link> </li>
              <li className=''> <Link to="#">hello</Link> </li>
          </ul>
           </li>
           <li className='ml-3'> <Link to="/sticker"> stickers </Link> </li>
           <li> <Link to="/review"> review </Link> </li>
           <li> <Link to="track"> track your order </Link> </li>
           <li> <Link to="contact"> contact </Link> </li>
           <li className='close' onClick={this.menuToggle}>
          <img src={close} alt="" width="20" />
           </li>
       </ul>
       <div className="nav-cart ">
           <span>0</span>
           <Link to="#">
           <img src={user} alt="" width="20" />
           </Link>
           <Link to="#">
           <img src={search} alt="" width="20"/>
           </Link>
           <Link to="#">
           <img src={cart} alt="" width="20"/>
           </Link>
       </div>
   </nav>
        </header>
        </div>
        </>
    )
    }
}
