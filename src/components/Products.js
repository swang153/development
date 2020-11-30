import React, { Component } from 'react'
import formatCurrency from '../util'

export default class Products extends Component {
    render() {
        return (
            <div>
               <ul className="products">
                   {this.props.products.map(product => (
                       <li key={product._id}>
                           <div className="product">
                                <img src={product.image} alt={product.title}></img>
                                
                                <h4>{product.title}</h4>
                                <h6>{product.era}, {product.merch}</h6>
                                
                                  
                                
                                    
                                
                               
                               <div className="product-price">
                                   
                                    <h5>${formatCurrency(product.price)}</h5>
                                   
                                   <button className="button primary">
                                       Add To Cart
                                   </button>
                               </div>
                           </div>
                       </li>
                   ))}
                </ul> 
            </div>
        )
    }
}

