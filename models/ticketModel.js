const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  clientName:{
    type: String
  },

  clientEmail:{
    type:String
  },

  clientPhone:{
    type:Number
  },

  clientAddress:{
    type:String
  },

  clientNote:{
    type:String
  },

  plumber:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Plumber',
    sparse:true
  }],

  createdAt:{
    type: Date
  }


},{collection:'tickets'})

const Ticket = mongoose.model('ticket', TicketSchema);

module.exports = Ticket;