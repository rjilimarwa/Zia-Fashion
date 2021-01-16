import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Products from './products/Products';
import Cart from './cart/Cart';
import Login from './auth/Login';
import Register from './auth/Register';
import DetailProduct from './detailProduct/DetailProduct';
import NotFound from './utils/not_found/NotFound';
function pages (){
    return (
        <Switch>
            <Route path="/" exact components={Products}/>
             <Route path="/detail/:id" exact components={DetailProduct}/>
            <Route path="/login" exact components={Login}/>
            <Route path="/register" exact components={Register}/>
            <Route path="/cart" exact components={Cart}/>
            <Route path="*" exact components={NotFound}/>
        </Switch>
    )
}
export default pages ;