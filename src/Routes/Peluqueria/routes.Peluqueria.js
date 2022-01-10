const {Router} = require('express');
const {
    createPeluqueria,
    deletePeluqueria,
    getPeluqueriaById,
    getPeluqueria,
    updatePeluqueria
} = require('./Controllers/all.controllers');
const router = Router();

//  /peluqueria
router.get('/', getPeluqueria);
router.get('/:id', getPeluqueriaById);
router.post('/create', createPeluqueria);
router.put('/update', updatePeluqueria);
router.put('/delete', deletePeluqueria);

module.exports = router;