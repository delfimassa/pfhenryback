const { createTicket } = require('./create.Ticket');
const { deleteTicket } = require('./delete.Ticket');
const { getTicketPelu, getTicketByClient } = require('./get.Ticket');
const { updateTicket } = require('./update.Ticket');


module.exports = {
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketPelu, 
    getTicketByClient
}