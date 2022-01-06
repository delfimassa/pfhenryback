const { createPeluqueria } = require('./create.Peluqueria');
const { deletePeluqueria } = require('./delete.Peluqueria');
const { getPeluqueria, getPeluqueriaById } = require('./get.Peluqueria');
const { updatePeluqueria } = require('./update.Peluqueria');


module.exports = {
    createPeluqueria,
    deletePeluqueria,
    getPeluqueriaById,
    getPeluqueria,
    updatePeluqueria
};
