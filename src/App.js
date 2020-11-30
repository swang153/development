import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import data from "./data.json";
import React from "react";
import Products from './components/Products';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      merch:"",
      era:"",
      sort: "",
    }
  }
  render() {
    return (
      <div className="Ariana Grande Store">
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
            <div className="cards-container">
              <Products products={this.state.products}></Products>
            </div>
            <div className="cart-container"><button>heeey</button></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
