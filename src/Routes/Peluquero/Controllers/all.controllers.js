const { createPeluquero } = require('./create.Peluquero');
const { deletePeluquero } = require('./delete.Peluquero');
const { getPeluquero, getPeluqueroById } = require('./get.Peluquero');
const { updatePeluquero } = require('./update.Peluquero');


module.exports = {
    createPeluquero,
    deletePeluquero,
    getPeluqueroById,
    getPeluquero,
    updatePeluquero
};