const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');
const upload = require('../middleware/fileUpload')

router.route('/')
.get(product.getAllProducts)
.post(upload.single('image'),product.createProduct);

router.route('/:id')
.get(product.getproductById)
.patch(product.updateProduct)
.delete(product.deleteProductById);

module.exports = router;