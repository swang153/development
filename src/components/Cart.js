import React, { Component } from 'react'
import formatCurrency from '../util'

// This class models the shopping cart which is a list of the products the customer
// has added to their cart. It also updates the total price of the items in the cart.
export default class Cart extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {/* handle for empty cart */}
                {cartItems.length === 0 ? (<div className="cart cart-header"><h5>Cart is empty</h5></div>)
                : 
                (<div className="cart cart-header"><h5>You have {cartItems.length} item(s) in your cart{" "}</h5></div>)}
                 <div>
                <div className="cart">
                    <ul className="cart-Items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}></img>
                                </div>
                                <div>
                                    <div>{item.title}</div>
                                    <div>
                                        {/* update total price */}
                                        ${formatCurrency(item.price)} x { item.count } {"  "}
                                        <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart">
                    <div className="total">
                        <div>
                            <h5>
                            Total: {" "} 
                            ${formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        )
    }
}
