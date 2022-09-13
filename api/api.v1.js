const router = require("express").Router();
const productRouter = require("../routes/product.routes")
const orderRouter = require("../routes/order.routes");
const adminrouter = require("../routes/admin.routes");

// Lists all the resources for the restful api
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/admin", adminrouter);





module.exports = router;
