const express = require('express');
const router = express.Router();
const { getAllTickets, getTicketById, createTicket, editTicketById, deleteTicketById } = require('../controllers/ticketController')

router
  .route('/')
  .get(getAllTickets)
  .post(createTicket)
  
router
  .route('/:id')
  .get(getTicketById)
  .put(editTicketById)
  .delete(deleteTicketById)
  

module.exports = router;