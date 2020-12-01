import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import data from "./data.json";
import React from "react";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';


// This is the control panel of the program. All classes are intertwined and related back
// to each other here.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      era: "",
      merch: "",
      sort: "",
    }
  }
  // Removes an item from the shopping cart
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems: cartItems.filter(x=>x._id !== product._id)});
    
  }
  // Adds an item to the cart
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })
    // initialize count when first item is added
    if(!alreadyInCart) {
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems})
  }
  // Sorts products by pricing (low to high or high to low)
  sortProducts = (event) => {
    const sort = event.target.value
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ?
          ((a.price > b.price) ? 1 : -1) :
          sort === "highest" ?
            ((a.price < b.price) ? 1 : -1) :
            // else organize by id number
            ((a._id > b._id) ? 1 : -1)

      ))
    }))

  }
  // Filter by which album/era the products are from: sweetener, tun, or positions
  filterEras = (event) => {
    if(event.target.value==="") {
      this.setState({era: event.target.value, products:data.products})
    } else {
      this.setState({
        era: event.target.value,
        products: this.state.products.filter(product => product.era.indexOf(event.target.value)>=0)
      })
    }
  }
  // Filter by which kind of merch it is: clothing, accessories, or music
  filterMerch = (event) => {
    if(event.target.value==="") {
      this.setState({merch: event.target.value, products:data.products})
    } else {
      this.setState({
        merch: event.target.value,
        products: this.state.products.filter(product => product.merch.indexOf(event.target.value)>=0)
      })
    }
  }
  render() {
    return (
      <div className="ariana grande shop">
        {/* navbar from bootstrap */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="white-heart.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ariana Grande Shop
          </Navbar.Brand>
        </Navbar>
        <main>
          <div className="wrapper" >
            {/* Container for the cards */}
            <div className="cards-container">
              <Filter 
                count={this.state.products.length}
                era={this.state.era}
                merch={this.state.merch}
                sort={this.state.sort}
                filterEras={this.filterEras}
                filterMerch={this.filterMerch}
                sortProducts={this.sortProducts}></Filter>
              <Products 
                products={this.state.products} 
                addToCart={this.addToCart}>
              </Products>
            </div>
            {/* // Container for the shopping cart sidebar */}
            <div className="cart-container">
              <Cart 
                cartItems={this.state.cartItems} 
                removeFromCart={this.removeFromCart}
              />
            </div>

          </div>
        </main>
      </div>
    );
  }
}

export default App;
