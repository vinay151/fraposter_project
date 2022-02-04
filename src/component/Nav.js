import React,{Component} from 'react';
import menu from '../svg/bars-solid.svg';
import close from '../svg/times-solid.svg';
import cart from '../svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import '../component/nav.css';

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
        <header>
   <div className='menu' onClick={this.menuToggle}>
    <img src={menu} alt="" width="20" />
   </div>
   <div className="logo">
       <h1> <Link to="/"> FRAPOSTER </Link> </h1>
   </div>
   <nav>
       <ul className={toggle ? "toggle" : ""}>
           <li> <Link to="#"> home </Link> </li>
           <li> <Link to="#"> home </Link> </li>
           <li> <Link to="#"> home </Link> </li>
           <li> <Link to="#"> home </Link> </li>
           <li> <Link to="#"> home </Link> </li>
           <li> <Link to="#"> home </Link> </li>
           <li> <Link to="#"> home </Link> </li>
           <li className='close' onClick={this.menuToggle}>
          <img src={close} alt="" width="20"/>
           </li>
       </ul>
       <div className="nav-cart">
           <span>0</span>
           <Link to="#">
           <img src={cart} alt="" width="20"/>
           </Link>
           <Link to="#">
           <img src={cart} alt="" width="20"/>
           </Link>
           <Link to="#">
           <img src={cart} alt="" width="20"/>
           </Link>
       </div>
   </nav>
        </header>
        </>
    )
    }
}
