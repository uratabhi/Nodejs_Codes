const express = require('express');


const Router = express.Router();

const productController = require('../controllers/products')

Router.get('/add-product',productController.addProductsSection);
  
Router.post('/add-product', productController.goToHome);


module.exports = Router;