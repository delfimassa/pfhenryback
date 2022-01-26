const {Router} = require('express');
const {
    createPeluqueria,
    deletePeluqueria,
    getPeluqueriaById,
    getPeluqueriaByUsername,
    getPeluqueria,
    updatePeluqueria,
    updateRating,
    addTurno
} = require('./Controllers/all.controllers');
const router = Router();

//  /peluqueria
router.get('/', getPeluqueria);
router.get('/:id', getPeluqueriaById);
router.get('/username', getPeluqueriaByUsername); 
router.post('/create', createPeluqueria);
router.put('/update', updatePeluqueria);
router.put('/update/rating/:id', updateRating);
router.put('/update/turno/:id', addTurno);
router.put('/delete', deletePeluqueria);

module.exports = router;