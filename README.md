# Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To run locally from the command line, type `npm start` and open up localhost:3000 in your browser.

# Organization of components
* Cart.js: This class models the shopping cart which is a list of the products the customer has added to their cart. It also updates the total price of the items in the cart.
* Filter.js: This class contains the filtering and sorting selectors and calls on the props to pass in the filter/sort that the user selected.
* Products.js: This class holds all the cards for the products. It uses the map function to reference parts of the json data. 
* App.js: The control panel that ties together the other components for functionality, described in more depth in the next section. 

# How data is passed down through components
The data is first built within the data.json file. App.js contains a state called "products" and is set equal to the data and includes methods for sorting and filtering that modify the state of the product. It then has reference to Products.js so that appropriate adjustments and can be made to the cards. App.js also has methods to update the aggregated data (cartItems) in the shopping cart as items are added and removed. It then refers to Cart.js to represent these changes.

# How the user trigger state changes
The user can change the state of the products by sorting by price (from lowest to highest or highest to lowest). They can also filter by era (the album) that the item comes from or by type of merch (clothing, accessories, or physical music). Additionally, the user can update the state of the cartItems by adding items to the cart or removing them from the cart. 

# Bugs 🥺
There is a small, wonky bug to my program. It can simultaneously sort and filter on first selection of each cateogry (i.e. select era: positions, merch: clothing, sort: lowest to highest). However, before any future filtering selections are made, you must first set the filter to "all" before selecting a new filter. It will then be able to do a new sorting/filtering combo. 
