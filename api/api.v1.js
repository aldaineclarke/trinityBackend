const router = require("express").Router();

router.use('/plumber',require('../routes/plumber.routes'));




// Lists all the resources for the restful api






module.exports = router;