const {Router} = require('express');
const {
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketPelu, 
    getTicketByClient
} = require('./Controllers/all.controllers');

const router = Router();


//   / ticket
router.get('/peluqueria', getTicketPelu);
router.get('/client', getTicketByClient);
router.post('/create', createTicket);
router.put('/update', updateTicket);
router.put('/delete', deleteTicket);

module.exports = router;