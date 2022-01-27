const {Router} = require('express');
const {
    createTurno,
    updateTurno,
    deleteTurno,
    getTurno,
    getTurnoById,
    getTurnoByClient,
    updateStateTurno
} = require('./Controllers/all.controllers');

const router = Router();


//   / turno
router.get('/:id', getTurnoById);
router.get('/peluqueria/:id', getTurno);
router.get('/client/:username', getTurnoByClient);
router.post('/create', createTurno);
router.put('/update', updateTurno);
router.put('/update/state', updateStateTurno);
router.put('/delete', deleteTurno);

module.exports = router;