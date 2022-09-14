const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');

router.route('/')
.get(serviceController.getAllServices)
.post(serviceController.createService);

router.route('/:id')
.get(serviceController.getServiceById)
.patch(serviceController.updateService)
.delete(serviceController.deleteServiceById);

module.exports = router;