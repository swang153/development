import React, { Component } from 'react'
import formatCurrency from '../util'

// This class holds all the cards for the products. It uses the map function to
// to reference parts of the json data. 
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
                                <h6>💟 {product.era}</h6>
                                <h6>🦋 {product.merch}</h6>
                               
                               <div className="product-price">

                                    <h5>${formatCurrency(product.price)}</h5>
                                   {/* button to add item to the cart */}
                                   <button onClick={() => this.props.addToCart(product)} className="button primary">
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

