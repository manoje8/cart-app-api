const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require  routes
const itemRoutes = require('./src/routes/item.routes')
// using as middleware
app.use('/api/v1/items', itemRoutes)


// Require address routes
const addressRoutes = require('./src/routes/address.routes')
// using as middleware
app.use('/api/v1/address', addressRoutes)

// Require employee routes
const customerRoutes = require('./src/routes/customer.routes')
// using as middleware
app.use('/api/v1/customer', customerRoutes)

// Require seller routes
const sellerRoutes = require('./src/routes/seller.routes')
// using as middleware
app.use('/api/v1/seller', sellerRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});