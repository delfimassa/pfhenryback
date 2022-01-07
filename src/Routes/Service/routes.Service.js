const {Router} = require('express');
const {
    createService,
    updateService,
    getServiceById,
    getService,
    deleteService
} = require('./Controllers/all.controllers');

const router = Router();


//    / service
router.get('/', getService);
router.get('/:id', getServiceById);
router.post('/create', createService);
router.put('/update', updateService);
router.put('/delete', deleteService);

module.exports = router;