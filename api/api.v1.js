const router = require("express").Router();

const productRouter = require("../routes/product.routes");
const orderRouter = require("../routes/order.routes");
const adminrouter = require("../routes/admin.routes");
const ticketRouter = require('../routes/ticketRoute.js')

// Lists all the resources for the restful api
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/admin", adminrouter);
router.use('/tickets', ticketRouter);

module.exports = router;
