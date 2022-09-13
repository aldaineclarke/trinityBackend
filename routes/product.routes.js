const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');

router.route('/')
.get(product.getAllProducts)
.post(product.createProduct);

router.route('/:id')
.get(product.getproductById)
.patch(product.updateProduct)
.delete(product.deleteProductById);

module.exports = router;