const express = require('express');
const router = express.Router();
const plumber = require('../controllers/plumber.controller');

router.route('/')
.get(plumber.getAllPlumbers)
.post(plumber.createPlumber);

router.route('/:id')
.get(plumber.getPlumberById)
.patch(plumber.updatePlumber)
.delete(plumber.deletePlumberById);

module.exports = router;