const { Routes } = require('express');
const {
    createClient,
    getClient,
    getClientById,
    updateClient,
    deleteClient
} = require('./Controllers/all.controllers');

const router = Routes();


//   / clients
router.get('/', getClient);
router.get('/:id', getClientById);
router.post('/create', createClient);
router.put('/update', updateClient);
router.put('/delete', deleteClient);

module.exports = router;