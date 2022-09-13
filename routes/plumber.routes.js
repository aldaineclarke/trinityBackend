const express = require('express');
const router = express.Router();
const plumber = require('../controllers/plumberController');

router.route('/')
.get(plumber.getAllPlumbers)
.post(plumber.createPlumber);

router.route('/:id')
.get(plumber.getplumberById)
.patch(plumber.updatePlumber)
.delete(plumber.deletePlumberById);

module.exports = router;