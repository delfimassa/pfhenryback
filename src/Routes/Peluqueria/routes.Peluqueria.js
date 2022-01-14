const {Router} = require('express');
const {
    createPeluqueria,
    deletePeluqueria,
    getPeluqueriaById,
    getPeluqueria,
    updatePeluqueria,
    updateRating
} = require('./Controllers/all.controllers');
const router = Router();

//  /peluqueria
router.get('/', getPeluqueria);
router.get('/:id', getPeluqueriaById);
router.post('/create', createPeluqueria);
router.put('/update', updatePeluqueria);
router.put('/update/rating/:id', updateRating);
router.put('/delete', deletePeluqueria);

module.exports = router;