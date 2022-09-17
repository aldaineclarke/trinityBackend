const express = require('express');
const router = express.Router();
const { getAllTickets, getTicketById, createTicket, editTicketById, deleteTicketById } = require('../controllers/ticket.controller')

router
  .route('/')
  .get(getAllTickets)
  .post(createTicket)
  
router
  .route('/:id')
  .get(getTicketById)
  .patch(editTicketById)
  .delete(deleteTicketById)
  

module.exports = router;