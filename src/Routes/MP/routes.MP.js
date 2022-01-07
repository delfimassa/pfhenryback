const {Router} = require('express');
const {
    createMP,
    deleteMP,
    getMPById,
    getMP,
    updateMP
} = require('./Controllers/all.controllers');

const router = Router();


//   / MP
router.get('/', getMP);
router.get('/:id', getMPById);
router.post('/create', createMP);
router.put('/update', updateMP);
router.put('/delete', deleteMP);

module.exports = router;