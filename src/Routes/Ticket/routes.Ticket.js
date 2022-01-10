const {Router} = require('express');
const {
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
    getTicket
} = require('./Controllers/all.controllers');

const router = Router();


//   / ticket
router.get('/', getTicket);
router.get('/:id', getTicketById);
router.post('/create', createTicket);
router.put('/update', updateTicket);
router.put('/delete', deleteTicket);

module.exports = router;