const { createPeluqueria } = require('./create.Peluqueria');
const { deletePeluqueria } = require('./delete.Peluqueria');
const { getPeluqueria, getPeluqueriaById, getPeluqueriaByUsername } = require('./get.Peluqueria');
const { updatePeluqueria, updateRating, addTurno } = require('./update.Peluqueria');


module.exports = {
    createPeluqueria,
    deletePeluqueria,
    getPeluqueriaById,
    getPeluqueria,
    updatePeluqueria,
    updateRating,
    addTurno,
    getPeluqueriaByUsername
};
