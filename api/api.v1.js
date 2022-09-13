const router = require("express").Router();
const adminrouter = require("../routes/admin.routes");

// Lists all the resources for the restful api
router.use("/admin", adminrouter);

module.exports = router;
