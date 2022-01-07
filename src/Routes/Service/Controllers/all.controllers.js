const { createService } = require('./create.Service');
const { deleteService } = require('./delete.Service');
const { getService, getServiceById } = require('./get.Service');
const { updateService } = require('./update.Service');


module.exports = {
    createService,
    updateService,
    getServiceById,
    getService,
    deleteService
};