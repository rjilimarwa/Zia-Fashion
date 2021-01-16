import React,{useState,useContext,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState';
function DetailProduct (){
    const params=useParams();
    const state=useContext(GlobalState);
    const[products]=state.ProductsAPI.products;
    const [detailProduct,setDetailProduct]=useState([]);
    useEffect=(()=>{
         if(params){
             products.forEach(product=>{
                 if(product._id===product.params) setDetailProduct(product)
             })
         }
        },[params,products])
    if(detailProduct.length === 0) return null;
    return(
       <div className="detail">
            <img src={detailProduct.images.url} alt=""/>
            <div className="detail-box">
             <h2>{detailProduct.title}</h2>
             <h6>#id:{detailProduct.product_id}></h6>
             <span>${detailProduct.price}</span>
             <p>{detailProduct.description}</p>
             <p>{detailProduct.content}</p>
             <p>Sold:{detailProduct.sold}</p>
              <Link to="/cart" className="cart">Buy Now </Link>
            </div>
       </div>

    )
}
export default DetailProduct