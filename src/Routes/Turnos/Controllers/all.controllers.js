const { createTurno } = require('./create.Turno');
const { deleteTurno } = require('./delete.Turno');
const { getTurno, getTurnoById } = require('./get.Turno');
const { updateTurno } = require('./update.Turno');


module.exports = {
    createTurno,
    updateTurno,
    deleteTurno,
    getTurnoById,
    getTurno
}