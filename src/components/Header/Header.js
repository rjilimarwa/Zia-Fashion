import React from 'react';
import  './Header.css';
import Menu from './icon/Menu.svg';
import Cart from './icon/Cart.svg';
import Close from './icon/Close.svg';
import {Link} from 'react-router-dom';

function Header (){
    return(
        <Header>
         <div className="menu">
            <img src={Menu} alt="" width="30"/>
            </div>
            <div className="logo">
            <h1><Link to="/">Zia Fashion</Link> </h1>
            </div>
            <ul>
             <li><Link to="/products">Products</Link></li>
              <li><Link to="/login">Login *Register</Link></li>
              <li><img src={Close} alt="" width="30"/></li>
            </ul>
            <div className="cart-icon">
            <span>0</span>
            <Link to="/cart"><img src={Cart} alt="" width="30"/></Link>
            </div>
        </Header>
    )
}

export default Header