import React from 'react';
import {Link} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem';
function Products (){
    const state=GlobalState(state);
    const [products]=state.ProductsAPI.products;
    return(
       <div>
        {products.map(product=>{
          return <ProductItem key={product._id} product={product}/>
        })}
       </div>

    )
}
export default Products