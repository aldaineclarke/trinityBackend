const router = require("express").Router();
const ticketRouter = require('../routes/ticketRoute.js')

// Lists all the resources for the restful api
router.use('/tickets', ticketRouter);
router.get('/', (_, res) => res.send('Welcome'));



module.exports = router;