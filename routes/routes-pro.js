const {getProducts, getProduct,  deleteProduct, postProduct} = require('../controller/contoller-pro');
const express = require('express');

const router = express.Router();



router.get('/products', getProducts);

router.get('/products/:id', getProduct);

router.delete('/products/:id',deleteProduct);

router.post('/products',postProduct);

module.exports= router;