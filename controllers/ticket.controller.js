const Ticket = require('../models/ticket.model');
const Json = require('../utilities/JSONResponse');
let message = undefined;


exports.getAllTickets = async(req, res) =>{
  try{
    const tickets = await Ticket.find();

    if(tickets.plumber){
      tickets = await Ticket.find()
    }

    if(tickets.length == 0){
      return Json.JSONResponse.success(res,'No tickets found', tickets , 404);
    }

    Json.JSONResponse.success(res, message, tickets, 200);
    
  }catch(err){
    Json.JSONResponse.error(res, message ,err.message,500);
  }  
}

exports.getTicketById = async(req, res) =>{

  try{
    const {id} = req.params;

    const ticket = await Ticket.find({_id:id});

    if(ticket.plumber){
      ticket = await Ticket.find({_id:id})
    }

    if(ticket == ''){
      return Json.JSONResponse.success(res, "Ticket not found" , ticket , 404);
    }

     Json.JSONResponse.success(res, message, ticket, 200);
    
  }catch(err){
    Json.JSONResponse.error(res, message ,err.message, 500);
  }  
}

exports.createTicket = async(req, res) =>{
  try{
    const{
    clientName,
    clientEmail,
    clientPhone,
    clientAddress,
    clientNote,
    service,
    plumber,
    createdAt
   } = req.body

   const ticket = {
    clientName: clientName,
    clientEmail:clientEmail,
    clientPhone: clientPhone,
    clientAddress:clientAddress,
    clientNote:clientNote,
    service:service,
    plumber:plumber,
    createdAt:createdAt
   }


   const newTicket  = await Ticket.create(ticket);
   Json.JSONResponse.success(res, message ,newTicket, 201);
  }catch(err){
    Json.JSONResponse.error(res, message ,err.message, 500);
  }
}

exports.editTicketById = async(req, res) =>{

  try{
    const {id} = req.params;

    const ticket = await Ticket.find({_id:id});

    if(ticket.plumber){
      ticket = await Ticket.find({_id:id})
    }

    if(ticket == ''){
      return Json.JSONResponse.success(res, "Ticket not found , cannot update" , ticket , 404);
    }


    const{
      clientName,
      clientEmail,
      clientPhone,
      clientAddress,
      clientNote,
      service,
      plumber,
      createdAt
     } = req.body
  
     const ticketDetails = {
      clientName: clientName,
      clientEmail:clientEmail,
      clientPhone: clientPhone,
      clientAddress:clientAddress,
      clientNote:clientNote,
      service:service,
      plumber:plumber,
      createdAt:createdAt
     }


     const newTicket = await Ticket.findByIdAndUpdate(id, ticketDetails);

     Json.JSONResponse.success(res, message, newTicket, 200);
    
  }catch(err){
    Json.JSONResponse.error(res, message ,err.message, 500);
  }  
}

exports.deleteTicketById = async(req, res) =>{

  try{
    const {id} = req.params;

    const ticket = await Ticket.find({_id:id});

    if(ticket.plumber){
      ticket = await Ticket.find({_id:id})
    }

    if(ticket == ''){
      return Json.JSONResponse.success(res, "Ticket not found, cannot be deleted" , ticket , 404);
    }

    await Ticket.findByIdAndRemove(id)
   
    Json.JSONResponse.success(res, message, ticket, 200);
    
  }catch(err){
    Json.JSONResponse.error(res, message ,err.message, 500);
  }  
}