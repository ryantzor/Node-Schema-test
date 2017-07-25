
// dependenceis

var express = require('express');
var router = express.Router();

// model
var Product = require('../models/product');


// route
Product.methods(['get','put','post','delete']);
Product.register(router, '/products');


// return router
module.exports = router;