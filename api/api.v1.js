const router = require("express").Router();

const productRouter = require("../routes/product.routes");
const orderRouter = require("../routes/order.routes");
const adminrouter = require("../routes/admin.routes");
const ticketRouter = require('../routes/ticket.routes.js')
const categoriesRouter = require('../routes/category.routes.js')
const userRouter = require("../routes/user.routes");

// Lists all the resources for the restful api
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/admin", adminrouter);
router.use('/tickets', ticketRouter);
router.use('/categories', categoriesRouter);
router.use('/plumbers',require('../routes/plumber.routes'));
router.use('/services',require('../routes/service.routes'));
router.use("/users", userRouter);

module.exports = router;
