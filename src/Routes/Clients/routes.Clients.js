const { Router } = require('express');
const {
    createClient,
    getClient,
    getClientById,
    updateClient,
    deleteClient,
    addFav
} = require('./Controllers/all.controllers');

const router = Router(); 


//   / clients
router.get('/', getClient);
router.get('/:username', getClientById);
router.post('/create', createClient);
router.put('/update', updateClient);
router.put('/update/addFav/:id', addFav);
router.put('/delete', deleteClient);

module.exports = router;