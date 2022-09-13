const router = require("express").Router();
const OrderController = require("../controllers/ordersController");

router
    .route("/")
    .get(OrderController.getAllOrders)
    .post(OrderController.createOrder);
    

router
    .route("/:id")
    .get(OrderController.getOrderById)
    .patch(OrderController.updateOrder)
    .delete(OrderController.deleteOrder);


module.exports = router;