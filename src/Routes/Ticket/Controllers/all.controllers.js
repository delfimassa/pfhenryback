const { createTicket } = require('./create.Ticket');
const { deleteTicket } = require('./delete.Ticket');
const { getTicket, getTicketById } = require('./get.Ticket');
const { updateTicket } = require('./update.Ticket');


module.exports = {
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
    getTicket
}