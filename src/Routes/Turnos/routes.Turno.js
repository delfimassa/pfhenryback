const {Router} = require('express');
const {
    createTurno,
    updateTurno,
    deleteTurno,
    getTurno,
    getTurnoById
} = require('./Controllers/all.controllers');

const router = Router();


//   / turno
router.get('/', getTurno);
router.get('/:id', getTurnoById);
router.post('/create', createTurno);
router.put('/update', updateTurno);
router.put('/delete', deleteTurno);

module.exports = router;