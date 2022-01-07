const { createMP } = require('./create.MP');
const { deleteMP } = require('./delete.MP');
const { getMP, getMPById } = require('./get.MP');
const { updateMP } = require('./update.MP');


module.exports = {
    createMP,
    deleteMP,
    getMPById,
    getMP,
    updateMP
};