const router = require("express").Router();
const adminrouter = require("../routes/admin.routes");
const userRouter = require("../routes/user.routes");

// Lists all the resources for the restful api
router.use("/admin", adminrouter);
router.use("/users", userRouter);

module.exports = router;
