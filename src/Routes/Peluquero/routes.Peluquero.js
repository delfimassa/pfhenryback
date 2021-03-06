const {Router} = require('express');
const {
    createPeluquero,
    deletePeluquero,
    getPeluqueroById,
    getPeluquero,
    updatePeluquero
} = require('./Controllers/all.controllers');

const router = Router();


//   / peluquero
router.get('/', getPeluquero);
router.get('/:id', getPeluqueroById);
router.post('/create', createPeluquero);
router.put('/update', updatePeluquero);
router.put('/delete', deletePeluquero);

module.exports = router;