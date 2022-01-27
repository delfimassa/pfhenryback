const { createTurno } = require('./create.Turno');
const { deleteTurno } = require('./delete.Turno');
const { getTurno, getTurnoById, getTurnoByClient } = require('./get.Turno');
const { updateTurno, updateStateTurno } = require('./update.Turno');


module.exports = {
    createTurno,
    updateTurno,
    deleteTurno,
    getTurnoById,
    getTurno,
    getTurnoByClient,
    updateStateTurno
}