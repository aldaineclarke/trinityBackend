const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.route('/')
.get(categoryController.getAllCategory)
.post(categoryController.createCategory);

router.route('/:id')
.get(categoryController.getcategoryById)
.patch(categoryController.updateCategory)
.delete(categoryController.deleteCategoryById);

module.exports = router;