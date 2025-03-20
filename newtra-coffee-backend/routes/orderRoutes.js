const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

router.post('/save', orderController.placeOrder);
router.get('/orderById/:id', orderController.getByOrderId);
router.get('/getAll', orderController.getAll);

module.exports = router;


